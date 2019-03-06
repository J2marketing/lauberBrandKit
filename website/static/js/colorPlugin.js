module.exports = function(code) {
	//TODO: Potentially add a regex incase the order of elements is put in wrong. Error handling.
	var colorVars = code.split(',');
	var colorHex = colorVars[0];
	var colorRGB = colorVars[1].split('.').join(',');
	var colorName = colorVars[2].split('|').join(' ');
		return '<div class="colorBlurb">'+
		'<div class="colorWindow" style="background-color:'+colorHex+';"></div>'+
		'<div class="colorDescBox">'+
			'<p class="colorName">'+colorName+'</p>'+
			'<p class="hexCode">HEX: '+colorHex+'</p>'+
			'<p class="rgbCode">RGB: '+colorRGB+'</p>'+
		'</div>'+
	'</div>'
}