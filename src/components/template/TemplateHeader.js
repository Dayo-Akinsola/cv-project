import React, { Component } from 'react';

class TemplateHeader extends Component {
 
  render() {
    const { formState } = this.props;
    const { first, last, title } = formState;
    return (
      <header className="template__header">
        <div className="template__name-container">
          <span className="template__header--text template__name--first-name">{first}</span>
          <span className="template__header--text template__name--last-name">{last}</span>
        </div>
        <span className="template__header--text template__header--title">{title}</span>
      </header>
    )
  }
}

export default TemplateHeader;