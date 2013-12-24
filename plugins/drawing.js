// onepoint.js - plugin example - drawing
onepoint.drawing = Plugin({
	"name": "Drawing",
	"description": "Drawing plugin for OnePoint",
	"author": "GeekyGamer14",
	"debug": false,
	"create": createDrawing,
	"color": "black",
	"bgcolor": setBgColor,
	"version": "1.0",
	"getImage": getImage});

function setBgColor(clr, ele){
	$(document.getElementById(ele)).css('background-color', clr);
	$('#messages').append('<br/>background color changed to ' + clr);
}
	
function createDrawing(element){
	if(document.getElementById(element) != null){
		createDrawListener(element);
		$(document.getElementById(element)).after('<br/>Brush colors:<br/><span class="colorpick black" onclick="onepoint.drawing.color = \'black\'"></span><span class="colorpick blue" onclick="onepoint.drawing.color = \'blue\'"></span><span class="colorpick red" onclick="onepoint.drawing.color = \'red\'"></span><span class="colorpick green" onclick="onepoint.drawing.color = \'green\'"></span><br/>Background colors:<br/><span class="colorpick white" onclick="onepoint.drawing.bgcolor(\'white\', \'testCanvas\')"></span><span class="colorpick blue" onclick="onepoint.drawing.bgcolor(\'blue\', \'testCanvas\')"></span><span class="colorpick red" onclick="onepoint.drawing.bgcolor(\'red\', \'testCanvas\')"></span><span class="colorpick green" onclick="onepoint.drawing.bgcolor(\'green\', \'testCanvas\')"></span>');
		//onepoint.write(onepoint.getPlugin('Drawing'), "created drawing for id " + element, msg);
		return true;
	}else{
		console.warn('[onepoint.js] could not create drawing for id ' + element);
		return false;
	}
}
var started = false;
function createDrawListener(element){
	$(document.getElementById(element)).mousedown(function(){
		$(document.getElementById(element)).mousemove(function(ev) {
			var pickedCanvas = document.getElementById(element);
			var context = pickedCanvas.getContext('2d');
			var x, y;
			// Mouse position
			if (ev.layerX || ev.layerX == 0){ // Firefox
				x = ev.layerX;
				y = ev.layerY;
			}else if(ev.offsetX || ev.offsetX == 0){ // Opera fix
				x = ev.offsetX;
				y = ev.offsetY;
			}
			 // The event handler works like a drawing pencil which tracks the mouse 
			 // movements. We start drawing a path made up of lines.
			if(!started){
				// Choose color, based on variable.
				context.strokeStyle = onepoint.drawing.color;
				context.beginPath();
				context.moveTo(x, y);
				started = true;
			}else{
				context.lineTo(x, y);
				context.stroke();
			}
			$('#' + element + 'Download').attr('href', onepoint.drawing.getImage(element));
			// For debugging purposes only. If you want
			// to view coordinates, set onepoint.drawing.debug to true.
			var msg = x + ", " + y;
			if(onepoint.drawing.debug == true){
				$("#coords").text(msg);
			}
			// End debugging
		});
	});
	$(document.getElementById(element)).mouseup(function(){
		$(this).off('mousemove');
		started = false;
	});
	$(document.getElementById(element)).mouseout(function(){
		$(this).off('mousemove');
		started = false;
	});
	var pickedCanvas = document.getElementById(element);
	var context = pickedCanvas.getContext('2d');
	context.font = "12px Consolas";
	context.fillText('Draw:',5,15);
}

function getImage(el){
	var canvas = document.getElementById(el);
	var img = canvas.toDataURL("image/png");
	return img;
}