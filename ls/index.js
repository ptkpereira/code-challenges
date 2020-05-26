// Implemente algum comando que você se encontra usando no bash, por exemplo, tente implementar a funcionalidade de ls

const fs = require('fs');

const currentDirectory = process.cwd();

fs.readdir(currentDirectory, (err, files) => {
  if (err) console.warn(err);
  files.map(file => console.log(file))
});
