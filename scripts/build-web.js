const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const www = path.join(root, 'www');
const src = path.join(root, 'index.html');
const dest = path.join(www, 'index.html');

if (!fs.existsSync(src)) {
  console.error('missing index.html');
  process.exit(1);
}

fs.mkdirSync(www, { recursive: true });
fs.copyFileSync(src, dest);

const androidPublic = path.join(
  root,
  'android/app/src/main/assets/public/index.html'
);
if (fs.existsSync(path.dirname(androidPublic))) {
  fs.mkdirSync(path.dirname(androidPublic), { recursive: true });
  fs.copyFileSync(src, androidPublic);
}

console.log('✅ www/index.html synced');
