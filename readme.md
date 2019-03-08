## J2 Marketing Brand Kit
Welcome! This is a work in progress copy of the J2 brand kit system. Built on <a href="https://docusaurus.io/">Docusaurus</a> and expanded with some additional functionality.

For a demo, visit <a href="https://kind-noyce-85f720.netlify.com/">this link.</a>

### Instructions for J2 content writers:

All brand-kit pages are written in markdown, and they are pretty simple to edit, though some simple HTML must be used at times. 

### Images

Below is a reference for including images in markdown.

#### Including a fullwidth image:

Simply add the image to the static/img/ directory, and then copy the code below and replace the filename with your filename. 
You can also use pure markdown syntax to add the images.

HTML:
```html
<img src="../img/yourpicnamehere.jpg">
```

#### Making an image downloadable

All that must be done to make an image downloadable is adding class="downloadable" right after the html image tag.

HTML:
```html
<img class="downloadable" src="../img/yourpicnamehere.jpg">
```

### Description Texts

Below is a reference for including either light description text below an image, or bolded description text above an image.

#### Adding description text to an element.

This is for adding informative text below images, blurbs, etc. 

Place the following line of code below whatever you want to caption.

```html
<p class="descriptionText">Your caption text here.</p>
```

#### Adding header description text to an element.

This is for adding a centered heading above text, an example can be found on the colors page, see "Main Color Palette"

Place the following line of code below whatever you want to add a title to. If you want the title to be bigger or smaller just change the h2 to an h1, h2, h3, h4, h5, or h6.

```html
<h2 class="centeredText">Main Color Palette</h2>
```

### Content Layouts and Columns

Below are a couple column layouts for dividing content into 2 or 4 columns. 

#### Adding columns for multiple pieces of content/images per row.

Adding columns is pretty simple, copy the code from the box below for your desired amount of columns, then replace each columns content with your own.

Two Columns:
```html
<div class="row">
<div class="halfWidth">Your Content or Image</div>
<div class="halfWidth">Your Content or Image 2</div>
</div>
```

Example with downloadable images:
```html
<div class="row">
<div class="halfWidth"><img class="downloadable" src="../img/WhatWeDo.png"></div>
<div class="halfWidth"><img class="downloadable" src="../img/WhatWeDo.png"></div>
</div>
```

Three Columns:
```html
<div class="row">
<div class="thirdWidth">Content Col 1</div>
<div class="thirdWidth">Content Col 2</div>
<div class="thirdWidth">Content Col 3</div>
</div>
```

Example with captioned downloadable images:
(note, the br tag in the descriptions are only to give the description texts some offset, they are not necessary. Use them at your discretion.)
```html
<div class="row">
<div class="thirdWidth"><img class="downloadable" src="../img/photoExamples7.jpg"><p class="descriptionText"><br>The more fun, the better!</p></div>
<div class="thirdWidth"><img class="downloadable" src="../img/photoExamples8.jpg"><p class="descriptionText"><br>This closeup shows a community member having fun, and highlights the actual event in detail.</p></div>
<div class="thirdWidth"><img class="downloadable" src="../img/photoExamples9.jpg"><p class="descriptionText"><br>A wide shot of trick-or-treating gives us diverse shots to pull from for future materials.</p></div>
</div>
```

### Color Blurbs

This section contains info on how to create individual blurbs of color for display on color pages.
_WARNING: Error handling for these and other markdown plugins does not currently exist, but is a planned implementation for some point in the near future._

#### Adding a single color blurb:

A color blurb requires 3 pieces of information. The name of the color, the hex code, and the RGB code. You must supply all three values or the blurb will fail to render. 

Adding a color blurb to the markdown looks like this:

```md
{@colorBlurb: #EDEDED,237.237.237,Deep-Grey}
```

Notice the formatting of the information that is fed into that module. It always MUST go: **hexcode,rgb,colorname**

- Hexcode can be 3 or 6 digit but must include the #.
- RGB must be seperated with periods NOT SPACES
- The color name (if more than one word) must be seperated with dashes - NOT SPACES
- Color Blurbs only accept ONE INPUT. Use multiple modules for multiple blurbs.
- Each item MUST be seperated by commas, NOT SPACES. 

Basically, every piece of info fed into the colorBlurb module must be one continuous string with no spaces. 

#### Adding a color list:

These lists are for listing larger groups of colors in a table, and can be used to either display primary or secondary colors. The main difference between these and the color blurb module, is that these can accept an infinite amount of colors.

Adding a color list to the markdown looks like this: 

```md
{@colorTable: #FABF2F,250.191.47,Lightning-Yellow&#2A3593,42.53.147,Bay-Blue&#9F29AE,159.41.174,Grape-Soda&#8BC14C,139.193.76,Sushi&#1965BF,25.101.191,Denim}
```

Here is a breakdown to make this easier to decipher:

This color table module can accept as many colors as are fed into it. The input works the exact same as the colorBlurb module, but each color is seperated with the & character. 
The syntax for this module must always follow this pattern: **hexcode,rgb,colorname&hexcode,rgb,colorname&hexcode,rgb,colorname.....** and so on, for as many colors as you need to add. 

Notice these formatting rules still apply:

- Hexcode can be 3 or 6 digit but must include the #.
- RGB must be seperated with periods NOT SPACES
- The color name (if more than one word) must be seperated with dashes - NOT SPACES
- Each individual color item attribute in the table MUST be seperated by commas, NOT SPACES. 
- Color tables can accept INFINITE inputs. Each color group of hexcode,rgb,colorname must be seperated with the & character.

The information fed into this module must also be one continuous string with no spaces that follows the rules listed above. It will fail to render if the formatting does not match exactly.

### Other rich content md plugins.

#### Adding a font table:

These lists are for listing groups of fonts used in the brand kit. They work similarly to the color tables module, they just accept different info.

Adding a font table to the markdown looks like this:
```md
{@fontTable: Open-Sans,Normal,300&Open-Sans,Italic,300&Open-Sans,Normal,400&Open-Sans,Italic,400&Open-Sans,Normal,600&Open-Sans,Italic,600&Open-Sans,Normal,700&Open-Sans,Italic,700&Open-Sans,Normal,800&Open-Sans,Italic,800}
```

This would generate a table containing every weight of open sans in the normal and italic styles. 

A breakdown of the input:

The font table can accept as many fonts as are fed into it. Each individual font row must look like this: **fontname,fontstyle,fontweight**
And if you are displaying more than one font variation in a table the input must be seperated by & and would look like this: **fontname,fontstyle,fontweight&&fontname,fontstyle,fontweight**

Note the following important info as you set up a font table:

- The font table CAN accept multiple fonts, but SHOULD NOT be used this way. The reason being that each font table gets the header info from the name of the first font in your list. So if you tried to generate a table with Prata and Open Sans in it, it would say that the font name was Prata for both of them. Use SEPERATE font table objects for different fonts.
- If you only need to display one variation, its OK to just put one input into the module.
- The font name (if more than one word) must be seperated with dashes - NOT SPACES
- Each attribute of the font must be seperated by commas, NOT SPACES
- Font tables can accept INFINITE inputs. Each color group of fontname,fontstyle,fontweight must be seperated with the & character.

##### Other important info about font tables.

**Including font files:**

You will be mainly using these to display google fonts. The reference to the google font MUST be included at the top of the typography MD file for these to work correctly.
You must go to google fonts, select the font you want to use, go to the customize tab, select all variations, and then copy the HTML ref link from that box and paste it to the head of the typography page. 

The ref link for Open Sans in this example looks like this: 
```html
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
```

**Including code boxes:**

The "Usage:" boxes at the bottom of the font tables in this guide are also not automatically generated, but use the docusaurus code tabs system. 

A usage box would look like this:

```md
\*\*Usage:\*\*

<\!--DOCUSAURUS_CODE_TABS-->
<\!--HTML Standard-->
\`\`\`html
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
\`\`\`
<\!--HTML/JS @import-->
\`\`\`html
<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i');
</style>   
\`\`\`
<\!--CSS-->
\`\`\`css
font-family: 'Open Sans', sans-serif;
\`\`\`
<\!--END_DOCUSAURUS_CODE_TABS-->
```

Just copy this block and paste it below any font tables that need this info displayed. All of the info in each tab was copied directly from the google fonts page for that font. 

### Additional Info

If something seems confusing, this brand guide has been fully populated with dummy content. You can reference that to figure out how to do most things that are included in this kit. 

If you are still having trouble, feel free to open an issue and I will try to clear up some documentation!

There are many planned fixes for the future of this project, and a lot of this can be cleaned up, but thats MVP for ya. 

Markdown reference guide: [click](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)