const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  let newCode = code
    .replace(/Luminary Medical/g, 'SKYON')
    .replace(/Luminary/g, 'SKYON')
    .replace(/luminarymedical\.com/g, 'skyon.com')
    .replace(/luminary\.eng/g, 'skyon.eng');
  
  if (code !== newCode) {
    fs.writeFileSync(filePath, newCode, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      replaceInFile(fullPath);
    }
  }
}

walk(path.join(__dirname, 'src'));
console.log('Replacement complete.');
