'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, 'dist');
const PORT = Number(process.env.PORT) || 3000;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.json': 'application/json; charset=utf-8',
    '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
        res.writeHead(405, {
            'Content-Type': 'text/plain; charset=utf-8',
            'Allow': 'GET, HEAD'
        });
        return res.end('Method Not Allowed');
    }

    let pathname;

    try {
        pathname = decodeURIComponent(
            new URL(req.url, 'http://localhost').pathname
        );
    } catch {
        res.writeHead(400);
        return res.end('Bad Request');
    }

    if (pathname.includes('\0')) {
        res.writeHead(400);
        return res.end('Bad Request');
    }

    const relativePath = pathname.replace(/^\/+/, '');
    let filePath = path.resolve(ROOT, relativePath || 'index.html');

    if (filePath !== ROOT && !filePath.startsWith(ROOT + path.sep)) {
        res.writeHead(403);
        return res.end('Forbidden');
    }

    try {
        if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
            filePath = path.join(filePath, 'index.html');
        }

        if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
            res.writeHead(404, {
                'Content-Type': 'text/plain; charset=utf-8',
                'X-Content-Type-Options': 'nosniff'
            });
            return res.end('Not Found');
        }

        const contentType =
            MIME_TYPES[path.extname(filePath).toLowerCase()] ||
            'application/octet-stream';

        res.writeHead(200, {
            'Content-Type': contentType,
            'X-Content-Type-Options': 'nosniff',
            'Cache-Control': path.extname(filePath) === '.html'
                ? 'no-cache'
                : 'public, max-age=3600'
        });

        if (req.method === 'HEAD') {
            return res.end();
        }

        fs.createReadStream(filePath)
            .on('error', () => {
                if (!res.headersSent) {
                    res.writeHead(500);
                }
                res.end();
            })
            .pipe(res);
    } catch {
        res.writeHead(500);
        res.end('Internal Server Error');
    }
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`CodeCraft Academy production server listening on port ${PORT}`);
});
