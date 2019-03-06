## J2 Marketing Brand Kit
Welcome! This is a work in progress copy of the J2 brand kit system. Built with <a href="https://docusaurus.io/">Docusaurus</a>.

For a demo, visit <a href="https://kind-noyce-85f720.netlify.com/">this link.</a>

### Instructions for J2 content writers:

All brand-kit pages are written in markdown, and they are pretty simple to edit. 

In order to get columns, images, etc, some basic HTML must be used. 

#### Including a fullwidth image:

Simply add the image to the static/img/ directory, and then copy the code below and replace the filename with your filename. 

HTML:
'''html
<img src="../img/yourpicnamehere.jpg">
'''


#### Making an image downloadable

All that must be done to make an image downloadable is adding class="downloadable" right after the html image tag.

HTML:
'''html
<img class="downloadable" src="../img/yourpicnamehere.jpg">
'''


#### Adding columns for multiple pieces of content/images per row.

Adding columns is pretty simple, copy the code from the box below for your desired amount of columns, then replace each columns content with your own.

Two Columns:
'''html
<div class="halfWidth">Your Content or Image</div><div class="halfWidth">Your Content or Image 2</div>
'''

Example with downloadable images:
'''html
<div class="halfWidth"><img class="downloadable" src="../img/WhatWeDo.png"></div><div class="halfWidth"><img class="downloadable" src="../img/WhatWeDo.png"></div>
'''

Three Columns:
'''html
<div class="thirdWidth">Content Col 1</div><div class="thirdWidth">Content Col 2</div><div class="thirdWidth">Content Col 3</div>
'''