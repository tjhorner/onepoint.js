console.log('[onepoint.js] Loading onepoint.js...');
onepoint = ["Use onepoint.plugins to view plugins"];

onepoint.plugins = [];

function Plugin(obj){
	this.name = obj.name;
	this.desc = obj.description;
	this.version = obj.version;
	this.author = obj.author;
	var pluginInfo = {
		"name": this.name,
		"description": this.desc,
		"author": this.author,
		"version": this.version,
	}
	onepoint.plugins.push(pluginInfo);
	console.log('[onepoint.js] Plugin "' + this.name + '" v' + this.version + ' by ' + this.author + ' loaded.');
	return obj;
}
console.log('[onepoint.js] onepoint.js successfully loaded!');