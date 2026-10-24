'use strict';

const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const htmlPath = path.join(root, 'index.html');
const cssPath = path.join(root, 'style.css');
const buildPath = path.join(root, 'scripts', 'build.js');
const imageDir = path.join(root, 'images', 'courses');
const attributionPath = path.join(imageDir, 'ATTRIBUTION.json');

const courses = [
  ['Level 1', 'Introduction to Programming', 'Learn the core ideas behind writing instructions that computers can execute.', 'FREE', 'programming code computer screen'],
  ['Level 1', 'Programming Fundamentals', 'Build confidence with variables, conditions, loops, functions and problem-solving.', '$5', 'programmer writing code'],
  ['Level 1', 'Digital Literacy & Computer Fundamentals', 'Understand computer hardware, software, files, digital tools and safe computing.', '$5', 'desktop computer keyboard'],
  ['Level 1', 'Developer Tools: Phone & Computer', 'Explore code editors, terminals, version control and development workflows.', '$10', 'computer developer workstation'],
  ['Level 1', 'Python Programming', 'Practise Python syntax, data structures, functions and small practical programs.', '$10', 'Python programming language code'],
  ['Level 1', 'Web Development Fundamentals', 'Learn how HTML, CSS and JavaScript work together to build websites.', '$15', 'HTML CSS JavaScript web development'],
  ['Level 1', 'Networking Fundamentals', 'Understand IP addresses, routers, switches, DNS and network communication.', '$15', 'computer network router cables'],
  ['Level 1', 'Linux & Operating Systems Fundamentals', 'Explore Linux commands, files, processes, permissions and operating-system basics.', '$20', 'Linux terminal computer'],
  ['Level 2', 'Database Management & SQL', 'Design tables, query data and learn relational database fundamentals.', '$20', 'database server data center'],
  ['Level 2', 'Software Development', 'Plan, structure, build and maintain useful software projects.', '$25', 'software engineer computer code'],
  ['Level 2', 'Software Testing & Quality Assurance', 'Learn test cases, debugging, quality checks and reliable release practices.', '$30', 'software testing computer'],
  ['Level 2', 'Network Administration', 'Practise network configuration, troubleshooting and infrastructure management.', '$35', 'network switch server rack'],
  ['Level 2', 'Systems Administration', 'Manage users, services, storage, updates and system reliability.', '$35', 'system administrator server'],
  ['Level 2', 'Cloud Computing Fundamentals', 'Understand cloud infrastructure, virtual machines, storage and deployment.', '$40', 'cloud computing servers'],
  ['Level 2', 'Data Analytics Fundamentals', 'Explore datasets, data cleaning, analysis and communicating findings.', '$40', 'data analytics charts computer'],
  ['Level 2', 'Application Development & Deployment', 'Build applications and learn the basics of testing and deployment.', '$45', 'application developer laptop'],
  ['Level 3', 'Cybersecurity Fundamentals', 'Learn security principles, common threats, risk and protective controls.', '$40', 'cybersecurity digital security'],
  ['Level 3', 'Computer & Network Security', 'Study secure network design, access controls and defensive configurations.', '$45', 'network security computer'],
  ['Level 3', 'Linux & Windows Security', 'Explore operating-system hardening, permissions, updates and auditing.', '$50', 'Linux Windows computer security'],
  ['Level 3', 'Identity & Access Management', 'Learn authentication, authorisation, multi-factor authentication and least privilege.', '$50', 'identity access security authentication'],
  ['Level 3', 'Vulnerability Assessment Fundamentals', 'Understand authorised vulnerability discovery, prioritisation and remediation.', '$55', 'cybersecurity vulnerability assessment'],
  ['Level 3', 'Security Monitoring Fundamentals', 'Learn logs, alerts, monitoring concepts and suspicious-activity investigation.', '$60', 'security monitoring computer screens'],
  ['Level 3', 'Defensive Cybersecurity', 'Practise defensive thinking, system protection and incident detection.', '$65', 'defensive cybersecurity security operations'],
  ['Level 4', 'SOC Fundamentals', 'Explore security operations centres, triage, alerts and analyst workflows.', '$80', 'security operations center analyst'],
  ['Level 4', 'Advanced Cybersecurity Operations', 'Study coordinated monitoring, threat analysis and security operations processes.', '$100', 'cybersecurity operations screens'],
  ['Level 4', 'Incident Response & Recovery', 'Learn preparation, containment, recovery and lessons-learned processes.', '$120', 'incident response digital forensics'],
  ['Level 4', 'Ethical Hacking in Authorized Labs', 'Study ethical testing methodology in systems and labs you have permission to test.', '$150', 'ethical hacking cybersecurity computer'],
  ['Level 4', 'Professional Penetration Testing', 'Learn scoping, safe testing, evidence handling and clear reporting.', '$200', 'penetration testing computer security'],
  ['Level 4', 'Red Team & Blue Team Operations', 'Compare authorised adversary simulation with detection and defence.', '$250', 'red team blue team cybersecurity'],
  ['Level 4', 'Digital Forensics & Cyber Investigation', 'Explore evidence preservation, forensic workflows and incident investigation.', '$250', 'digital forensics computer investigation'],
  ['Level 4', 'Cloud & Enterprise Security Engineering', 'Explore cloud security architecture, policies, monitoring and enterprise controls.', '$300', 'cloud security enterprise servers'],
  ['Level 5', 'CodeCraft Academy Advanced Cybersecurity Professional Programme', 'An advanced learning pathway covering defensive operations, authorised testing, investigation and security engineering.', '$500–$1,000', 'advanced cybersecurity professional training']
];

function slug(text) {
  return text.toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[c]);
}

function findCoursesSection(html) {
  const start = html.indexOf('<section class="courses" id="courses">');
  if (start < 0) throw new Error('Could not find the existing courses section.');

  const openingEnd = html.indexOf('>', start) + 1;
  let depth = 1;
  const tagPattern = /<\/?section\b[^>]*>/gi;
  tagPattern.lastIndex = openingEnd;

  let match;
  while ((match = tagPattern.exec(html))) {
    if (/^<\/section/i.test(match[0])) depth--;
    else depth++;

    if (depth === 0) {
      return { start, end: tagPattern.lastIndex };
    }
  }

  throw new Error('Could not find the matching closing section tag.');
}

function makeCatalogue() {
  const levels = [...new Set(courses.map(c => c[0]))];
  let cards = '';

  for (const level of levels) {
    cards += `<div class="catalogue-level">\n<h3 class="course-level-title">${escapeHtml(level)}</h3>\n<div class="course-grid">\n`;

    const items = courses.filter(c => c[0] === level);
    items.forEach((course, i) => {
      const [, title, description, price] = course;
      const file = `${slug(title)}.jpg`;
      cards += `<article class="course-card catalogue-card" data-course="${escapeHtml(slug(title))}">\n`;
      cards += `<img class="course-image" src="images/courses/${escapeHtml(file)}" alt="${escapeHtml(title)} course image" loading="lazy" decoding="async" onerror="this.classList.add('course-image-unavailable')">\n`;
      cards += `<p class="course-number">COURSE ${courses.indexOf(course) + 1}</p>\n`;
      cards += `<h4>${escapeHtml(title)}</h4>\n`;
      cards += `<p>${escapeHtml(description)}</p>\n`;
      cards += `<p class="course-price"><strong>${escapeHtml(price)}</strong></p>\n`;
      cards += `</article>\n`;
    });

    cards += '</div>\n</div>\n';
  }

  return `<section class="courses" id="courses">
<p class="tagline">YOUR JOURNEY STARTS HERE</p>
<h2>Explore Our Learning Missions</h2>
<p class="section-description">Choose a course, build practical skills, and progress through five learning levels. Learn Today. Build Tomorrow.</p>
<div class="catalogue-grid">
${cards}</div>
</section>`;
}

async function searchCommons(query) {
  const url = new URL('https://commons.wikimedia.org/w/api.php');
  url.search = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: `filetype:bitmap ${query}`,
    gsrnamespace: '6',
    gsrlimit: '8',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata',
    iiurlwidth: '800',
    format: 'json',
    origin: '*'
  }).toString();

  const response = await fetch(url, {
    headers: { 'User-Agent': 'CodeCraftAcademyCourseCatalogue/1.0 (educational website)' },
    signal: AbortSignal.timeout(25000)
  });

  if (!response.ok) throw new Error(`Wikimedia HTTP ${response.status}`);
  const data = await response.json();
  const pages = Object.values(data.query?.pages || {});

  return pages
    .filter(p => p.imageinfo?.[0]?.thumburl || p.imageinfo?.[0]?.url)
    .map(p => {
      const info = p.imageinfo[0];
      const meta = info.extmetadata || {};
      const plain = key => String(meta[key]?.value || '')
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      return {
        title: p.title,
        page: `https://commons.wikimedia.org/wiki/${encodeURIComponent(p.title.replace(/ /g, '_'))}`,
        url: info.thumburl || info.url,
        description: plain('ImageDescription'),
        artist: plain('Artist'),
        license: plain('LicenseShortName'),
        licenseUrl: plain('LicenseUrl'),
        credit: plain('Credit')
      };
    });
}

async function downloadJpeg(url, destination) {
  const response = await fetch(url, {
    headers: { 'User-Agent': 'CodeCraftAcademyCourseCatalogue/1.0' },
    signal: AbortSignal.timeout(30000)
  });
  if (!response.ok) throw new Error(`Image HTTP ${response.status}`);

  const type = (response.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
  const buffer = Buffer.from(await response.arrayBuffer());

  if (!type.startsWith('image/')) throw new Error(`Not an image: ${type}`);
  if (buffer.length < 1500) throw new Error('Image download was unexpectedly small');

  // Store in the extension that matches the downloaded content.
  const ext = type === 'image/jpeg' ? '.jpg'
    : type === 'image/png' ? '.png'
    : type === 'image/webp' ? '.webp'
    : type === 'image/gif' ? '.gif'
    : type === 'image/avif' ? '.avif'
    : null;

  if (!ext) throw new Error(`Unsupported image format: ${type}`);

  const target = destination.replace(/\.jpg$/, ext);
  fs.writeFileSync(target, buffer);
  return path.basename(target);
}

async function main() {
  if (!fs.existsSync(htmlPath) || !fs.existsSync(cssPath) || !fs.existsSync(buildPath)) {
    throw new Error('Expected index.html, style.css or scripts/build.js is missing.');
  }

  const originalHtml = fs.readFileSync(htmlPath, 'utf8');
  const section = findCoursesSection(originalHtml);
  const newSection = makeCatalogue();
  const newHtml = originalHtml.slice(0, section.start) + newSection + originalHtml.slice(section.end);

  const backup = path.join(root, `index.html.before-catalogue-${Date.now()}.bak`);
  fs.copyFileSync(htmlPath, backup);
  fs.mkdirSync(imageDir, { recursive: true });

  // Apply the local catalogue first, so a slow image search cannot lose the course content.
  fs.writeFileSync(htmlPath, newHtml);

  let css = fs.readFileSync(cssPath, 'utf8');
  if (!css.includes('.catalogue-grid')) {
    css += `

/* CodeCraft Academy 32-course catalogue */
.catalogue-grid { display: flex; flex-direction: column; gap: 34px; }
.catalogue-level { width: 100%; }
.course-level-title { margin: 0 0 18px; color: var(--primary); font-size: 1.45rem; }
.catalogue-card { min-width: 0; overflow: hidden; }
.catalogue-card h4 { font-size: 1.1rem; line-height: 1.4; margin: 12px 0; }
.course-image { display: block; width: 100%; height: 190px; object-fit: cover; border-radius: 10px; margin: 0 0 18px; background: var(--border); }
.course-image-unavailable { display: none; }
.course-number { font-size: .72rem !important; letter-spacing: .08em; font-weight: 700; }
.course-price { margin-top: 14px; }
@media (max-width: 900px) { .catalogue-grid .course-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 600px) { .catalogue-grid .course-grid { grid-template-columns: minmax(0, 1fr); } .course-image { height: 210px; } }
`;
    fs.writeFileSync(cssPath, css);
  }

  // Make sure production builds copy the whole course-image directory.
  let build = fs.readFileSync(buildPath, 'utf8');
  if (!build.includes("path.join(root, 'images', 'courses')")) {
    const anchor = "copyFile(logoPath, path.join(output, 'images', 'logo.png'));";
    if (!build.includes(anchor)) throw new Error('Could not safely locate logo-copy step in build.js.');
    build = build.replace(anchor, `${anchor}

const courseImagesPath = path.join(root, 'images', 'courses');
if (fs.existsSync(courseImagesPath)) {
    fs.cpSync(courseImagesPath, path.join(output, 'images', 'courses'), { recursive: true });
}
`);
    fs.writeFileSync(buildPath, build);
  }

  console.log(`Catalogue installed: ${courses.length} courses. Backup: ${path.basename(backup)}`);
  console.log('Searching Wikimedia Commons for course images. This can take several minutes.');

  const manifest = [];
  let downloaded = 0;
  let failed = 0;

  for (let i = 0; i < courses.length; i++) {
    const [, title, , , query] = courses[i];
    const targetBase = path.join(imageDir, `${slug(title)}.jpg`);

    if (['.jpg', '.png', '.webp', '.gif', '.avif'].some(ext => fs.existsSync(targetBase.replace(/\.jpg$/, ext)))) {
      console.log(`[${i + 1}/${courses.length}] Already present: ${title}`);
      downloaded++;
      continue;
    }

    try {
      let results = await searchCommons(query);
      // If the full search phrase fails, try a simpler phrase.
      if (!results.length) {
        const simpler = query.split(' ').slice(0, 2).join(' ');
        results = await searchCommons(simpler);
      }
      if (!results.length) throw new Error('No suitable Commons image found');

      let saved = null;
      let selected = null;
      for (const candidate of results) {
        try {
          const filename = await downloadJpeg(candidate.url, targetBase);
          saved = filename;
          selected = candidate;
          break;
        } catch (err) {
          console.log(`  Skipping candidate: ${err.message}`);
        }
      }
      if (!saved) throw new Error('Could not download a usable image');

      manifest.push({ course: title, file: saved, ...selected });
      downloaded++;
      console.log(`[${i + 1}/${courses.length}] Downloaded: ${title} -> ${saved}`);
    } catch (err) {
      failed++;
      console.log(`[${i + 1}/${courses.length}] IMAGE FAILED: ${title} — ${err.message}`);
      manifest.push({ course: title, file: null, error: err.message });
    }

    // Avoid flooding Commons with requests.
    await new Promise(resolve => setTimeout(resolve, 350));
  }

  fs.writeFileSync(attributionPath, JSON.stringify({
    generatedAt: new Date().toISOString(),
    source: 'Wikimedia Commons',
    note: 'Check each file page and licence terms before commercial reuse.',
    images: manifest
  }, null, 2) + '\n');

  console.log('\n===== IMAGE SUMMARY =====');
  console.log(`Courses in catalogue: ${courses.length}`);
  console.log(`Images downloaded or already present: ${downloaded}`);
  console.log(`Image failures: ${failed}`);
  console.log(`Attribution manifest: ${path.relative(root, attributionPath)}`);
  console.log('\nCatalogue and build configuration updated. No Git push or deployment was performed.');
  if (failed) console.log('Some cards may hide their image until you rerun the script or add a suitable image.');
}

main().catch(err => {
  console.error('Catalogue update failed:', err.stack || err);
  process.exitCode = 1;
});
