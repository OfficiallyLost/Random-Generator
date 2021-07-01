const { firstNames } = require('./random/names/first');
const { middleNames } = require('./random/names/middle');
const { lastNames } = require('./random/names/last');
const Core = require('./core/Class');

class RandomGenerator {
	constructor(options) {
		this.core = new Core();
		this.names = {
			first: '',
			middle: this.core.random(middleNames),
			last: this.core.random(lastNames)
		};
		this.options = Object.assign(
			{
				gender: '',
				first: true,
				middle: false,
				last: false
			},
			options
		);
	}

	/**
	 * 
	 * @param {String} gender The gender of the person (male, female, any)
	 * @param {?Boolean} first Either true or false, if you want the first name or not
	 * @param {?Boolean} middle Either true or false, if you want middle first name or not
	 * @param {?Boolean} last Either true or false, if you want the last name or not
	 * @returns A random name based on the settings provided
	*/

	/**
	 * 
	 * @param {Number} lowest The lowest age
	 * @param {Number} highest The highest age
	 * @returns A random age in the given parameters
	 */

	age(lowest, highest) {
		return 'Coming soon';
	}

	get name() {
		if (!this.options.gender) throw new Error('You must specify the gender (male, female, any)');
		if (!this.options.first) this.options.first = false;
		if (this.options.middle) this.options.middle = true;
		if (this.options.last) this.options.last = true;

		let randomFirst = this.names.first;
		const randomMiddle = this.names.middle;
		const randomLast = this.names.last;

		if (this.options.gender === 'male') {
			randomFirst = this.core.random(firstNames.male);
			if (this.options.first && this.options.middle && this.options.last)
				return `${randomFirst} ${randomMiddle} ${randomLast}`;
			if (this.options.first && !this.options.middle && this.options.last) return `${randomFirst} ${randomLast}`;
			if (this.options.first && this.options.middle && !this.options.last)
				return `${randomFirst} ${randomMiddle}`;
			if (this.options.first && !this.options.middle && !this.options.last) return randomFirst;
		} else if (this.options.gender === 'female') {
			randomFirst = this.core.random(firstNames.female);
			if (this.options.first && this.options.middle && this.options.last)
				return `${randomFirst} ${randomMiddle} ${randomLast}`;
			if (this.options.first && !this.options.middle && this.options.last) return `${randomFirst} ${randomLast}`;
			if (this.options.first && this.options.middle && !this.options.last)
				return `${randomFirst} ${randomMiddle}`;
			if (this.options.first && !this.options.middle && !this.options.last) return randomFirst;
		} else if (this.options.gender === 'any') {
			if (this.options.first && this.options.middle && this.options.last)
				return `${randomFirst} ${randomMiddle} ${randomLast}`;
			if (this.options.first && !this.options.middle && this.options.last) return `${randomFirst} ${randomLast}`;
			if (this.options.first && this.options.middle && !this.options.last)
				return `${randomFirst} ${randomMiddle}`;
			if (this.options.first && !this.options.middle && !this.options.last) return randomFirst;
		} else throw new Error('That is not a valid gender (male, female, any)');
	}

	get profile() {}
}

module.exports = RandomGenerator;
