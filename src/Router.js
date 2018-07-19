import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Homepage from './components/Homepage';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='homepage' component={Homepage} title='muviDB' initial />
      </Scene>
    </Router>
  );
}

export default RouterComponent;
