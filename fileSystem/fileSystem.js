const fs = require('fs');

// check if exist
fs.access('example.txt', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('The file or directory exists!');
  }
});

// Reading a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Writing to a file
fs.writeFile('example.txt', 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

// Creating a directory
fs.mkdir('example-dir', (err) => {
  if (err) throw err;
  console.log('The directory has been created!');
});

// Renaming a file
fs.rename('example.txt', 'new-example.txt', (err) => {
  if (err) throw err;
  console.log('The file has been renamed!');
});

// Deleting a file
fs.unlink('new-example.txt', (err) => {
  if (err) throw err;
  console.log('The file has been deleted!');
});

// Removing a directory
fs.rmdir('example-dir', (err) => {
  if (err) throw err;
  console.log('The directory has been removed!');
});
