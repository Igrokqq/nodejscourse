const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const rename = promisify(fs.rename);
const unlink = promisify(fs.unlink);
const rmdir = promisify(fs.rmdir);
const access = promisify(fs.access);

// Reading a file
access('example.txt')
  .then(() => {
    return readFile('example.txt', 'utf8');
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

// Writing to a file
writeFile('example.txt', 'Hello, world!')
  .then(() => {
    console.log('The file has been saved!');
  })
  .catch((err) => {
    console.error(err);
  });

// Creating a directory
access('example-dir')
  .then(() => {
    console.log('The directory already exists!');
  })
  .catch(() => {
    return mkdir('example-dir');
  })
  .then(() => {
    console.log('The directory has been created!');
  })
  .catch((err) => {
    console.error(err);
  });

// Renaming a file
access('example.txt')
  .then(() => {
    return rename('example.txt', 'new-example.txt');
  })
  .then(() => {
    console.log('The file has been renamed!');
  })
  .catch((err) => {
    console.error(err);
  });

// Deleting a file
access('new-example.txt')
  .then(() => {
    return unlink('new-example.txt');
  })
  .then(() => {
    console.log('The file has been deleted!');
  })
  .catch((err) => {
    console.error(err);
  });

// Removing a directory
access('example-dir')
  .then(() => {
    return rmdir('example-dir');
  })
  .then(() => {
    console.log('The directory has been removed!');
  })
  .catch((err) => {
    console.error(err);
  });
