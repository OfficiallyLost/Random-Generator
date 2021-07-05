const Generator = require('./src/lib/index');
console.log(Generator);
function RandomGenerator() {
	return new Generator();
}

module.exports = RandomGenerator;
