import React, { Component } from 'react';

class TemplateHeader extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className="template__header">
        <div className="template__name-container">
          <span className="template__header--text template__name--first-name"></span>
          <span className="template__header--text template__name--last-name"></span>
        </div>
        <span className="template__header--text template__header--title"></span>
      </header>
    )
  }
}

export default TemplateHeader;