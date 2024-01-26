const fs = require('fs');
const path = require('path');

const folderPath = 'E:/Rehan_Faryad/Global_Dc/.vscode';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // List all files in the directory
  files.forEach(file => {
    console.log(file);
  });
});
