const content = require('./content.json');
const moduleA = require('./moduleA');
const moduleB = require('./moduleB');

const result = moduleA.sum(1, 2)
const result2 = moduleB.sum(2,3);

console.log('sum', result);
console.log('content', content);
console.log('sum 2', result2);
