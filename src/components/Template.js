import React, { Component } from 'react';
import TemplateHeader from './template/TemplateHeader';
import EducationTemplate from './template/EducationTemplate';
import ExperienceTemplate from './template/ExperienceTemplate';
import TemplateSidebar from './template/TemplateSidebar';

class Template extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="template">
        <TemplateHeader />
        <div className="template__sections">
          <EducationTemplate />
          <ExperienceTemplate />
        </div>
        <TemplateSidebar />
      </div>
    )
  }
}

export default Template;