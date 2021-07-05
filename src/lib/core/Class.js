class Core {
	constructor() {}

	get random() {
		return {
			element(array) {
				return array[Math.floor(Math.random() * array.length)];
			}
		};
	}
}

module.exports = Core;
