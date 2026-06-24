const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (err.code === 'ENOTDIR' || err.code === 'EBADF') {
        if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts') || dirFile.endsWith('.json') || dirFile.endsWith('.css')) {
          filelist.push(dirFile);
        }
      } else {
        throw err;
      }
    }
  });
  return filelist;
};

const replaceInFiles = (files) => {
  let changedFiles = 0;
  
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;

    // Names
    content = content.replace(/SST Escola Jackson/g, 'EL BRIT');
    content = content.replace(/Escola Jackson/g, 'EL BRIT');

    // HEX Colors
    content = content.replace(/#4f46e5/g, '#7ab32e'); // indigo-600 -> darker green
    content = content.replace(/#6366f1/g, '#8DC63F'); // indigo-500 -> brand green
    content = content.replace(/#2563eb/g, '#689c25'); // blue-600 -> dark green
    content = content.replace(/#3b82f6/g, '#8DC63F'); // blue-500 -> brand green

    // RGB Colors (for rgba styles)
    // indigo
    content = content.replace(/99,\s*102,\s*241/g, '141,198,63');
    // blue
    content = content.replace(/37,\s*99,\s*235/g, '104,156,37');

    // Tailwind classes
    content = content.replace(/blue-600/g, 'lime-600');
    content = content.replace(/blue-500/g, 'lime-500');
    content = content.replace(/blue-700/g, 'lime-700');
    content = content.replace(/blue-100/g, 'lime-100');
    content = content.replace(/blue-50/g, 'lime-50');
    content = content.replace(/blue-400/g, 'lime-400');
    content = content.replace(/blue-900/g, 'lime-900');

    content = content.replace(/indigo-600/g, 'lime-600');
    content = content.replace(/indigo-500/g, 'lime-500');
    content = content.replace(/indigo-700/g, 'lime-700');
    content = content.replace(/indigo-100/g, 'lime-100');
    content = content.replace(/indigo-50/g, 'lime-50');
    content = content.replace(/indigo-400/g, 'lime-400');
    content = content.replace(/indigo-900/g, 'lime-900');

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      changedFiles++;
      console.log('Updated:', file);
    }
  });
  
  console.log(`\nTotal files updated: ${changedFiles}`);
};

const dirsToScan = [
  path.join(__dirname, 'frontend', 'app'),
  path.join(__dirname, 'frontend', 'components'),
  path.join(__dirname, 'frontend', 'public')
];

let allFiles = [];
dirsToScan.forEach(dir => {
  if (fs.existsSync(dir)) {
    allFiles = allFiles.concat(walkSync(dir));
  }
});

replaceInFiles(allFiles);
