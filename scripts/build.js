const fs = require('node:fs');
const path = require('node:path');
const JavaScriptObfuscator = require('javascript-obfuscator');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');

function copyFile(source, destination) {
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.copyFileSync(source, destination);
}

const htmlPath = path.join(root, 'index.html');
const cssPath = path.join(root, 'style.css');
const jsPath = path.join(root, 'script.js');
const logoPath = path.join(root, 'images', 'logo.png');

for (const file of [htmlPath, cssPath, jsPath, logoPath]) {
    if (!fs.existsSync(file)) {
        throw new Error(`Required website file is missing: ${file}`);
    }
}

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

let html = fs.readFileSync(htmlPath, 'utf8');

if (!html.includes('<script src="script.js"></script>')) {
    throw new Error('Expected script tag was not found. Production build stopped safely.');
}

html = html.replace(
    '<script src="script.js"></script>',
    '<script src="script.js" defer></script>'
);

fs.writeFileSync(path.join(output, 'index.html'), html);
copyFile(cssPath, path.join(output, 'style.css'));
copyFile(logoPath, path.join(output, 'images', 'logo.png'));

const courseImagesPath = path.join(root, 'images', 'courses');
if (fs.existsSync(courseImagesPath)) {
    fs.cpSync(courseImagesPath, path.join(output, 'images', 'courses'), { recursive: true });
}


const curriculumSource = path.join(root, 'curriculum', 'master-curriculum.json');
if (!fs.existsSync(curriculumSource)) {
    throw new Error('Required curriculum file is missing: curriculum/master-curriculum.json');
}
copyFile(curriculumSource, path.join(output, 'curriculum', 'master-curriculum.json'));

const originalJs = fs.readFileSync(jsPath, 'utf8');

const obfuscatedJs = JavaScriptObfuscator.obfuscate(originalJs, {
    compact: true,
    stringArray: true,
    stringArrayEncoding: ['base64'],
    stringArrayThreshold: 0.75,
    renameGlobals: false,
    sourceMap: false
}).getObfuscatedCode();

fs.writeFileSync(path.join(output, 'script.js'), obfuscatedJs);

console.log('Production build completed.');
console.log('Output directory: dist/');
console.log('Included: index.html, style.css, script.js, images/logo.png');
