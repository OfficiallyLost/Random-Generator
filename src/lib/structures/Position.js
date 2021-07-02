const RandomGenerator = require('../../../index');

class Position {
	constructor() {
		this.random = RandomGenerator();
	}

	get data() {
		return this.random;
	}
}

module.exports = Position;
