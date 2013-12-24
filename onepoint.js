console.log('[onepoint.js] Loading onepoint.js...');
onepoint = ["Use onepoint.plugins to view plugins"];

onepoint.plugins = [];

// get plugin by name, we load first this because
// we are going to use it in the Plugin() function
onepoint.getPlugin = function(p){
	for (var i = 0; i < onepoint.plugins.length; i++) {
	if (onepoint.plugins[i].name === p) {
			return onepoint.plugins[i];
		}
	}
	throw "Couldn't find object with id: " + id;
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
	console.log('[onepoint.js] Plugin "' + this.name + '" v' + this.version + ' by ' + this.author + ' loaded.');
	return obj;
}

// write as a plugin
onepoint.write = function(pl, msg, lvl){
	lvl = lvl || 'msg';
	if(lvl == 'msg'){
		console.log('[' + pl.name + '] ' + msg);
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

console.log('[onepoint.js] onepoint.js loaded');