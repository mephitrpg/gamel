const _ = require ("underscore");
const Settings = require("../controllers/Settings");

class Num {

	constructor(n, options) {
		this.value = Number.isFinite(n) ? n : null;
		return this;
	}

	valueOf() {
		return this.value;
	}

	toString() {
		return String(this.value);
	}

	value() {
		return this.value;
	}
	
}

module.exports = Num;