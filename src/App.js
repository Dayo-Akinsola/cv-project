import React, { Component } from  'react';
import Forms from './components/Forms';
import Template from './components/Template.js';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="page-content">
        <Forms />
        <Template />
      </div>
    )
  }
}


export default App;