module.exports = function(code) {
	//TODO: Potentially add a regex incase the order of elements is put in wrong. Error handling.
    var fontRows = code.split('&');
    var fontOutput = "";
    for (font in fontRows){
        fontObj = fontRows[font].split(',');
        var fontName = fontObj[0].split('-').join(' ');
        var fontStyle = fontObj[1];
        var fontWeight = fontObj[2];
        var newRow = 
        "<div class=\"fontContainer\" style=\"\">"+
            "<div class=\"largeFormFont\" style=\"font-family:'"+fontName+"';font-style:"+fontStyle+";font-weight:"+fontWeight+";\">"+
            "Aa"+
            "</div>"+
            "<div class=\"alphabetDisplay\" style=\"font-family:'"+fontName+"';font-style:"+fontStyle+";font-weight:"+fontWeight+";\">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>1234567890(,.;:?!$&*)"+
            "</div>"+
            "<div class=\"fontInfo\">"+
                "<span style=\"border-bottom:2px solid black;margin-bottom:5px;\">"+fontName+"</span>"+
                "<br>"+
                "Weight: <span style=\"font-family:'"+fontName+"';font-style:"+fontStyle+";font-weight:"+fontWeight+";\">"+fontWeight+"</span><br>"+
                "Style: <span style=\"font-family:'"+fontName+"';font-style:"+fontStyle+";font-weight:"+fontWeight+";\">"+fontStyle+"</span>"+
            "</div>"+
        "</div>";
        var fontOutput = fontOutput+newRow;
    }
	return fontOutput;
}



