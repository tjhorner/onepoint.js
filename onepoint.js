onepoint = ["Use onepoint.plugins to view plugins"];

onepoint.plugins = [];

// DON'T EDIT THIS SHIT OR I WILL KILL YOU
onepoint.base = {
		name: "onepoint.js",
		author: "GeekyGamer14",
		description: "onepoint.js base",
		version: "1"
	};
// okie u can edit below here

onepoint.getPluginByName = function(p){
	for (var i = 0; i < onepoint.plugins.length; i++) {
	if (onepoint.plugins[i].name === p) {
			return onepoint.plugins[i];
		}
	}
	throw 'Can\'t find plugin called ' + p;
}

onepoint.pluginExists = function(p){
	for (var i = 0; i < onepoint.plugins.length; i++) {
	if (onepoint.plugins[i].name === p) {
			return true;
		}
	}
	return false;
}

function Plugin(obj){
	if(onepoint.pluginExists(obj.name) == true){
		return "Plugin already exists.";
	}
	this.name = obj.name;
	this.desc = obj.description;
	this.version = obj.version;
	this.author = obj.author;
	var pluginInfo = {
		"name": this.name,
		"description": this.desc,
		"author": this.author,
		"version": this.version,
		__proto__: null,
	}
	onepoint.plugins.push(pluginInfo);
	console.log('Plugin "' + this.name + '" v' + this.version + ' by ' + this.author + ' loaded.');
	return obj;
}

// write to console as a plugin
onepoint.write = function(pl, msg, lvl){
	lvl = lvl || 'msg';
	if(lvl == 'msg'){
		console.debug('[' + pl.name + '] ' + msg);
		return true;
	}
	if(lvl == 'warning'){
		console.warn('[' + pl.name + '] ' + msg);
		return true;
	}
	if(lvl == 'err'){
		console.error('[' + pl.name + '] ' + msg);
		return true;
	}
}
console.log = function(msg){onepoint.write(onepoint.base, msg);};

console.log('[onepoint.js] onepoint.js loaded');
