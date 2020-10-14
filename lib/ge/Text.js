const _ = require ("underscore");
const Locale = require("../controllers/Locale");

class Text {

	constructor(multilanguage, options) {
		multilanguage = _.defaults(multilanguage, {
			[Locale.getLang()]: '',
		});
		
		options = this.options = _.defaults(options, {
			
		});

		const text = this.text = {};
		for (let [key, value] of Object.entries(multilanguage)) {
			text[key] = String(value);
		}
		
		return this;
	}

	valueOf() {
		return this.text[Locale.getLang()];
	}

	toString() {
		return this.text[Locale.getLang()];
	}

	value() {
		return this.text[Locale.getLang()];
	}

}

module.exports = Text;