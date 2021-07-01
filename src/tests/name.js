const RandomGenerator = require('../lib/index');
const random = new RandomGenerator({ gender: 'male', first: true, last: true });
console.log(random.name);
