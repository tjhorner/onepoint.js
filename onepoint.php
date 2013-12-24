<html>
<head>
	<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
	<script src="onepoint.js"></script>
	<script src="plugins/drawing.js"></script>
	<script src="plugins/noparse.js"></script>
	<link rel="stylesheet" type="text.css" href="/css/onepoint.css"></link>
</head>
<body onload="onepoint.drawing.create('testCanvas'); onepoint.drawing.debug = true;"><center>
	<h1>onepoint.js</h1>
	<p>Onepoint.js is a simple library written in JavaScript that is expandable with no limit. It's perfect for beginners and even for professionals.</p>
	<h2>Plugin example: Drawing</h2>
	<a href="" id="testCanvasDownload">Download picture</a><br/>
	<canvas id="testCanvas" width="500" height="300"></canvas><br/><br/>
	<div id="debug">Debug console:<div id="coords"></div><div id="messages">console ready</div></div>
	<h2>Plugin example: Noparse</h2>
	<noparse><b>this</b> <span>is surrounded in </span> noparse tags<!-- comments even work! --></noparse>
	</center>
</body>
</html>