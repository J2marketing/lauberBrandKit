function addDownloadButtons(){
    jQuery(function($){
        $(document).ready(function () {
            $(".downloadable").each(function() {
                $(this).wrapAll('<a class="downloadImgLink" href="'+this.src+'" download="'+getName(this)+'"><div class="image"></div></a>');
                console.log("loopreached");
            });
        });

    });
}
function getName(imageFile) {
    var fullPath = imageFile.src;
    var filename = fullPath.replace(/^.*[\\\/]/, '');
   return filename;
}
addDownloadButtons();