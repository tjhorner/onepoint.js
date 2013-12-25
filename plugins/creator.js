//simple plugin creator, nothing much.
onepoint.creator = Plugin({
	name: "Plugin Creator",
	author: "GeekyGamer14",
	description: "Use onepoint.creator.create()",
	version: "1",
	create: createPlugin
});

function createPlugin(n, d, a, v){
	console.log('Put this piece of code on the first line of your plugin file.');
	return "onepoint." + n.toLowerCase() + " = Plugin({name:\"" + n + "\",description:\"" + d + "\",author:\"" + a + "\",version:\"" + v + "\"});";
}