require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('./../images/yeoman.png');

import NameComponent from './my/namespaced/components/NameComponent.js' 

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">whatever</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
