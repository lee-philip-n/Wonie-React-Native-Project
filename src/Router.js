import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import Homepage from './components/Homepage';
import MovieListInfo from './components/MovieListInfo';
import LoginForm from './components/LoginForm';
import CreateAccountForm from './components/CreateAccountForm';

const logout = () => {
  firebase.auth().signOut()
    .then(() => {
      Actions.login({ type: 'reset' })
    })
    .catch((error) => {
      console.error('Sign Out Error', error)
    });
}


const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene 
          rightTitle='Login'
          onRight={ () => Actions.login() }
          key='homepage_login' 
          component={Homepage} 
          title='muviDB' 
          initial 
        />
        <Scene 
          rightTitle='Favorites'
          onRight={ () => console.log('Favorites') }
          key='homepage_logout' 
          component={Homepage} 
          title='muviDB'
          backTitle='Logout'
          onBack={ () => logout()  }
        />
        <Scene 
          rightTitle='Create Account'
          onRight={ () => Actions.createAccount({ type: 'reset' }) }
          key='login' 
          component={LoginForm} 
          title='Login' 
          back
          onBack={ () => Actions.homepage_login({ type: 'reset' }) }
        />
        <Scene 
          key='createAccount' 
          component={CreateAccountForm} 
          title='Create Account' 
          back
          onBack={ () => Actions.login({ type: 'reset' }) }
        />
        <Scene key='movieListInfo' component={MovieListInfo} title='Movie Info' />
      </Scene>
    </Router>
  );
  
}

export default RouterComponent;
