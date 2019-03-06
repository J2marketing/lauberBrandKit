/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.


//TODO: Create a plugin for and replace image code, image download code, columns, etc. 
//Factory for building remarkable-embed plugins
const {Plugin: Embed, extensions} = require('remarkable-embed');


const createVariableInjectionPlugin = () => {
  let initializedPlugin;

  const embed = new Embed()
  embed.register('colorBlurb', require('./static/js/colorPlugin.js'))


  return (md, options) => {
  if (!initializedPlugin) {
    initializedPlugin = {
      
      hook: md.use(embed.hook)
    };
  }

  return initializedPlugin.hook;
  };
};



// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'J2 Marketing',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/Logo_Black_onecolor-03.png',
    infoLink: 'https://www.goj2.com',
    pinned: false,
  },
  {
    caption: 'Intercambio Express',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/intercambio-scaled.png',
    infoLink: 'https://www.intercambioexpress.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Brand Kit', // Title for your website.
  tagline: 'Home of the J2 digital brand kit.',
  url: 'https://brand.goj2.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'brand-kit',
  organizationName: 'J2Marketing',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'brandjectives', label: 'Brand Kit'},
    {page: 'help', label: 'Information'},
    {blog: true, label: 'Release Notes'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/compressed-logo.png',
  footerIcon: 'img/compressed-logo.png',
  favicon: 'img/compressed-logo.png',

  /* Colors for website */
  colors: {
    primaryColor: '#333333',
    secondaryColor: '#222222',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Open+Sans:400,700',
    'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
  ],
  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} J2 Marketing`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  markdownPlugins: [
    createVariableInjectionPlugin()
  ],
  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js', '../js/imgDwnld.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
