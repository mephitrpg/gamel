const _ = require ("underscore");
const Settings = require("../controllers/Settings");

class Locale {

	static init() {
		new Locale();
		return Locale;
	}
	
	static getLang() {
		return this.lang;
	}

	static setLang(q) {
		Settings.set('settings-locale-lang', q);
		this.lang = q;
	}

	static getCurrency() {
		return this.currency;
	}

	static setCurrency(q) {
		Settings.set('settings-locale-currency', q);
		this.currency = q;
	}

	static getCountry() {
		return this.country;
	}

	static setCountry(q) {
		Settings.set('settings-locale-country', q);
		this.country = q;
	}

	static getTimeZone() {
		return this.timeZone;
	}

	static setTimeZone(q) {
		Settings.set('settings-locale-timezone', q);
		this.timeZone = q;
	}

	constructor(options) {
		options = this.options = _.defaults(options, {
			lang: 'en',
			currency: 'GBP',
			country: 'gb',
			timeZone: 'Europe/London',
		});

		this.lang = options.lang;
		this.currency = options.currency;
		this.country = options.country;
		this.timeZone = options.timeZone;

		Locale.setLang(options.lang);
		Locale.setCurrency(options.currency);
		Locale.setCountry(options.country);
		Locale.setTimeZone(options.timeZone);
		
		return this;
	}

}

module.exports = Locale;