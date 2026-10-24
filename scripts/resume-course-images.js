'use strict';

const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const imageDir = path.join(root, 'images', 'courses');
const htmlPath = path.join(root, 'index.html');
const manifestPath = path.join(imageDir, 'ATTRIBUTION.json');

const courses = [
  ['Software Development', 'software development programming code'],
  ['Software Testing & Quality Assurance', 'software testing quality assurance'],
  ['Network Administration', 'computer network switch router'],
  ['Systems Administration', 'server system administrator'],
  ['Cloud Computing Fundamentals', 'cloud computing infrastructure'],
  ['Data Analytics Fundamentals', 'data analytics visualization'],
  ['Application Development & Deployment', 'application development software'],
  ['Cybersecurity Fundamentals', 'cybersecurity information security'],
  ['Computer & Network Security', 'computer network security'],
  ['Linux & Windows Security', 'Linux Windows operating system security'],
  ['Identity & Access Management', 'identity access management authentication'],
  ['Vulnerability Assessment Fundamentals', 'cybersecurity vulnerability assessment'],
  ['Security Monitoring Fundamentals', 'security operations monitoring'],
  ['Defensive Cybersecurity', 'defensive cybersecurity'],
  ['SOC Fundamentals', 'security operations center analyst'],
  ['Advanced Cybersecurity Operations', 'cybersecurity operations analyst'],
  ['Incident Response & Recovery', 'incident response computer security'],
  ['Ethical Hacking in Authorized Labs', 'ethical hacking computer security'],
  ['Professional Penetration Testing', 'penetration testing cybersecurity'],
  ['Red Team & Blue Team Operations', 'red team blue team cybersecurity'],
  ['Digital Forensics & Cyber Investigation', 'digital forensics computer investigation'],
  ['Cloud & Enterprise Security Engineering', 'cloud security architecture'],
  ['CodeCraft Academy Advanced Cybersecurity Professional Programme', 'cybersecurity education computer']
];

function slug(text) {
  return text.toLowerCase().replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function getJson(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'CodeCraftAcademy/1.0 (educational course catalogue)'
    },
    signal: AbortSignal.timeout(30000)
  });

  if (response.status === 429) {
    const err = new Error('HTTP 429 rate limit');
    err.rateLimited = true;
    err.retryAfter = response.headers.get('retry-after');
    throw err;
  }

  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

async function searchImage(query) {
  const url = new URL('https://commons.wikimedia.org/w/api.php');
  url.search = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: `filetype:bitmap ${query}`,
    gsrnamespace: '6',
    gsrlimit: '6',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata',
    iiurlwidth: '800',
    format: 'json'
  }).toString();

  const data = await getJson(url);
  const pages = Object.values(data.query?.pages || {});

  return pages.filter(page => page.imageinfo?.[0]?.thumburl || page.imageinfo?.[0]?.url)
    .map(page => {
      const info = page.imageinfo[0];
      const meta = info.extmetadata || {};
      const plain = key => String(meta[key]?.value || '')
        .replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

      return {
        title: page.title,
        page: 'https://commons.wikimedia.org/wiki/' +
          encodeURIComponent(page.title.replace(/ /g, '_')),
        url: info.thumburl || info.url,
        artist: plain('Artist'),
        license: plain('LicenseShortName'),
        licenseUrl: plain('LicenseUrl'),
        credit: plain('Credit')
      };
    });
}

async function downloadImage(url, basePath) {
  const response = await fetch(url, {
    headers: { 'User-Agent': 'CodeCraftAcademy/1.0' },
    signal: AbortSignal.timeout(30000)
  });

  if (response.status === 429) {
    const err = new Error('Image server HTTP 429');
    err.rateLimited = true;
    err.retryAfter = response.headers.get('retry-after');
    throw err;
  }

  if (!response.ok) throw new Error(`Image HTTP ${response.status}`);

  const type = (response.headers.get('content-type') || '')
    .split(';')[0].trim().toLowerCase();

  const ext = {
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/webp': '.webp',
    'image/gif': '.gif',
    'image/avif': '.avif'
  }[type];

  if (!ext) throw new Error(`Unsupported image type: ${type}`);

  const buffer = Buffer.from(await response.arrayBuffer());
  if (buffer.length < 1500) throw new Error('Image file too small');

  const filename = path.basename(basePath, '.jpg') + ext;
  fs.writeFileSync(path.join(imageDir, filename), buffer);
  return filename;
}

async function main() {
  fs.mkdirSync(imageDir, { recursive: true });

  const html = fs.readFileSync(htmlPath, 'utf8');
  let manifest = { source: 'Wikimedia Commons', images: [] };

  if (fs.existsSync(manifestPath)) {
    try {
      manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    } catch {
      console.warn('Existing attribution manifest could not be read; creating a new one.');
    }
  }

  const existingByCourse = new Map(
    (manifest.images || []).filter(item => item.course).map(item => [item.course, item])
  );

  let downloaded = 0;
  let skipped = 0;
  let failed = 0;
  let stopForRateLimit = false;

  for (let i = 0; i < courses.length; i++) {
    const [title, query] = courses[i];
    const base = `${slug(title)}.jpg`;
    const foundFile = ['.jpg', '.png', '.webp', '.gif', '.avif']
      .map(ext => base.replace(/\.jpg$/, ext))
      .find(file => fs.existsSync(path.join(imageDir, file)));

    if (foundFile) {
      console.log(`[${i + 1}/${courses.length}] SKIP existing: ${title}`);
      skipped++;
      continue;
    }

    if (stopForRateLimit) {
      console.log(`[${i + 1}/${courses.length}] DEFERRED: ${title}`);
      failed++;
      continue;
    }

    try {
      console.log(`[${i + 1}/${courses.length}] Searching: ${title}`);
      let results = await searchImage(query);

      if (!results.length) {
        results = await searchImage(query.split(' ').slice(0, 2).join(' '));
      }

      if (!results.length) throw new Error('No matching image found');

      let saved = null;
      let selected = null;

      for (const result of results) {
        try {
          saved = await downloadImage(result.url, path.join(imageDir, base));
          selected = result;
          break;
        } catch (err) {
          if (err.rateLimited) throw err;
          console.log(`  Skipping image candidate: ${err.message}`);
        }
      }

      if (!saved) throw new Error('No candidate image could be downloaded');

      const entry = { course: title, file: saved, ...selected };
      existingByCourse.set(title, entry);
      downloaded++;
      console.log(`  SAVED: ${saved}`);

      // Keep requests slow to reduce the chance of another rate limit.
      await sleep(5000);
    } catch (err) {
      failed++;
      console.log(`  FAILED: ${err.message}`);

      if (err.rateLimited) {
        const seconds = Number(err.retryAfter);
        const waitMs = Number.isFinite(seconds) && seconds > 0
          ? Math.min(seconds * 1000, 300000)
          : 120000;

        console.log(`Rate limit encountered. Waiting ${Math.round(waitMs / 1000)} seconds.`);
        await sleep(waitMs);
        stopForRateLimit = true;
      } else {
        await sleep(5000);
      }
    }
  }

  const merged = [...existingByCourse.values()];
  const courseOrder = new Map(courses.map((c, i) => [c[0], i]));
  merged.sort((a, b) => (courseOrder.get(a.course) ?? 999) - (courseOrder.get(b.course) ?? 999));

  fs.writeFileSync(manifestPath, JSON.stringify({
    generatedAt: new Date().toISOString(),
    source: 'Wikimedia Commons',
    note: 'Review each original file page and its licence before commercial reuse.',
    images: merged
  }, null, 2) + '\n');

  // Correct all catalogue paths to use the actual downloaded extension.
  let updatedHtml = fs.readFileSync(htmlPath, 'utf8');
  let fixedPaths = 0;

  for (const [title] of courses) {
    const name = slug(title);
    const actual = ['jpg', 'png', 'webp', 'gif', 'avif']
      .find(ext => fs.existsSync(path.join(imageDir, `${name}.${ext}`)));

    if (!actual) continue;

    const expected = `images/courses/${name}.${actual}`;
    const cardStart = updatedHtml.indexOf(`data-course="${name}"`);
    if (cardStart < 0) continue;

    const imgStart = updatedHtml.indexOf('<img class="course-image"', cardStart);
    const imgEnd = updatedHtml.indexOf('>', imgStart);
    if (imgStart < 0 || imgEnd < 0) continue;

    const before = updatedHtml.slice(imgStart, imgEnd + 1);
    const after = before.replace(/src="images\/courses\/[^"]+"/, `src="${expected}"`);

    if (before !== after) {
      updatedHtml = updatedHtml.slice(0, imgStart) + after + updatedHtml.slice(imgEnd + 1);
      fixedPaths++;
    }
  }

  fs.writeFileSync(htmlPath, updatedHtml);

  console.log('\n===== RESUME SUMMARY =====');
  console.log(`New images downloaded: ${downloaded}`);
  console.log(`Existing images preserved: ${skipped}`);
  console.log(`Courses still missing: ${failed}`);
  console.log(`Image paths corrected: ${fixedPaths}`);
  console.log(`Attribution manifest: ${path.relative(root, manifestPath)}`);
  console.log('No Git push or deployment was performed.');
}

main().catch(err => {
  console.error(err.stack || err);
  process.exitCode = 1;
});
