// hot damn we really need a <stylesheet> tag
onepoint.stylesheet = Plugin({
	name: "Stylesheet",
	description: "<stylesheet> tag",
	version: "0.1",
	author: "GeekyGamer14",
	help: "Use <stylesheet sheet=\"path_to_sheet.css\"></stylesheet>"
})

onepoint.stylesheet.check = function(){
	var ss = onepoint.stylesheet;
	$('stylesheet').each(function(){
		if($(this).attr('styled') != 'true'){
			$(this).html('<link href="' + $(this).attr('sheet') + '" rel="stylesheet" type="text/css"></link>');
			$(this).attr('styled', 'true');
			onepoint.write(ss, 'Loaded stylesheet from ' + $(this).attr('sheet'));
		}
	});
	
	$('style').each(function(){
		if($(this).attr('styled') !== 'true'){
			if($(this).attr('src') !== undefined){
				$(this).html('<link href="' + $(this).attr('src') + '" rel="stylesheet" type="text/css"></link>');
				$(this).attr('styled', 'true');
				onepoint.write(ss, 'Loaded stylesheet from ' + $(this).attr('src'));
			}
		}
	})
}
onepoint.stylesheet.check();
$(document).ready(function(){
	onepoint.stylesheet.check();
	setInterval(onepoint.stylesheet.check, 500);
});
