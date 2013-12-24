// onepoint.js - plugin example - noparse
onepoint.noparse = Plugin({
	name: "Noparse",
	description: "Noparse tag",
	author: "GeekyGamer14",
	check: checkNoParse,
	version: "1.0",});

$(document).ready(function(){
	checkNoParse();
	setInterval(checkNoParse, 500);
});

function checkNoParse(){
	var np = onepoint.noparse;
	$('noparse').each(function(){
		if($(this).attr('unparseified') != 'true'){
			onepoint.write(np, 'found an un-unparsified <noparse> tag', 'warning');
			$(this).text($(this).html());
			$(this).attr('unparseified', 'true');
		}
	});
}