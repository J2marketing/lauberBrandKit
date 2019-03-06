module.exports = function(code) {
	//TODO: Potentially add a regex incase the order of elements is put in wrong. Error handling.
    var colorRows = code.split('&');
    var tableHeader = '<div class="tg-wrap"><table class="tg" style="table-layout: fixed; width: 776px;">'+
    '<colgroup>'+
    '<col style="width: 83px;">'+
    '<col style="width: 231px;">'+
    '<col style="width: 231px;">'+
    '<col style="width: 231px;">'+
    '</colgroup>'+
    '<tbody>';
    var rowsGroup = "";
    for (color in colorRows){
        colorObj = colorRows[color].split(',');
        var colorHex = colorObj[0];
        var colorRGB = colorObj[1].split('.').join(', ');
        var colorName = colorObj[2].split('|').join(' ');
        var newRow = '<tr>'+
        '<td class="tg-g4yi" style="background-color:'+colorHex+';"></td>'+
        '<td class="tg-eb10"><span style="font-weight: bold;">'+colorName+'</span></td>'+
        '<td class="tg-us36"><span style="color: #9b9b9b;">HEX:</span> <span style="font-weight: bold; color: #333333;">'+colorHex+'</span></td>'+
        '<td class="tg-us36"><span style="color: #9b9b9b;">RGB:</span><strong><span style="color: #333333;">'+colorRGB+'</span></strong></td>'+
        '</tr>';
        var rowsGroup = rowsGroup+newRow;
    }
    var tableFooter = '</tbody></table></div>';

		return tableHeader+rowsGroup+tableFooter;
}