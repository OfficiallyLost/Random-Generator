const Random = require('../structures/Random');
console.log(new Random());

class Core {
	constructor() {}

	get random() {
		return {
			element: Random.element
		};
	}
}

module.exports = Core;
