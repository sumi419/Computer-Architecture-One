const fs = require('fs');

const file = process.argv.slice(2);

if (file.length != 1) {
  console.log('Usage: Node [file location] [file name]');
  console.log(file);
  process.exit(1);
}

const filename = file[0];
const filedata = fs.readFileSync(filename, 'utf8');

const program = filedata.trim().split(/[\r\n]+/g);
const formattedprogram = [];
for (let line of program) {
  // if line is a number we just take the first 8 characters w/o comments
  if (!isNaN(line.substr(0, 8))) {
    formattedprogram.push(line.substr(0, 8));
  }
}

module.exports = { formattedprogram };
