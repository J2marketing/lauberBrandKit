function addDownloadButtons(){
    jQuery(function($){
        $(document).ready(function () {
            //Remove pipes, commas and 'by' from the meta
            //Move image above title and meta
            //Add a container to the featured image on archive pages
            console.log("pagerdy");
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
    // or, try this, 
    // var filename = fullPath.split("/").pop();

   return filename;
}
addDownloadButtons();