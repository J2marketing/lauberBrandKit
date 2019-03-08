/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn how to add content on the [github page.](
        https://github.com/DIGIREN/j2BrandKit/blob/master/readme.md
      )`,
      title: 'Writing Info',
    },
    {
      content: 'Do you want your own freakin sweet brand kit? [Click Here](https://goj2.com/contact)',
      title: 'Get your own',
    },
    {
      content: "Want something new to be added? Have an idea? Hate something? [Click Here](https://github.com/DIGIREN/j2BrandKit/issues) to open a new issue.",
      title: 'Want a feature?',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>INFORMATION</h1>
          </header>
          <p>Welcome to the wonderful J2 Brand Kit System! Built on Docasaurus & expanded with custom functionality.</p>
          <GridBlock className="infoPage" contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
