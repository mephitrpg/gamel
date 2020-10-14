if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

class Settings {
	static set(key, val) {
		localStorage.setItem(key, val);
	}
	static get(key) {
		return localStorage.getItem(key);
	}
}

module.exports = Settings;