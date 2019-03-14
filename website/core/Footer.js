/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
          {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
          <div>
            <h5>Brand Kit</h5>
            <a href={this.docUrl('brandjectives.html')}>
              Brandjectives Overview
            </a>
            <a href={this.docUrl('colors.html')}>
              Color Reference
            </a>
            <a href={this.docUrl('typography.html')}>
              Typography Reference
            </a>
          </div>
          <div>
            <h5>About Brand Kit</h5>
            <a href={this.pageUrl('users.html')}>
              User Showcase
            </a>
            <a
              href={this.pageUrl('help.html')}
              target="_blank"
              rel="noreferrer noopener">
              Information
            </a>
            <a
              href="https://goj2.com/"
              target="_blank"
              rel="noreferrer noopener">
              J2 Marketing
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Release Notes</a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
