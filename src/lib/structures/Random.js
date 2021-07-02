const Position = require('./Position');
const RandomGenerator = require('../../../index');

class Random extends Position {
	constructor() {
		super();
		this.random = RandomGenerator();
	}

	/**
     * 
     * @param {Array} array Returns a random element in the given array
     * @returns Random element
     */
	element(array) {
		return array[Math.floor(Math.random() * array.length)];
	}
}

module.exports = Random;
