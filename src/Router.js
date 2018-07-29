import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import Homepage from './components/Homepage';
import MovieListInfo from './components/MovieListInfo';
import LoginForm from './components/LoginForm';
import CreateAccountForm from './components/CreateAccountForm';
import FavoritesForm from './components/FavoritesForm';

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
          title='Wonie' 
          initial 
        />
        <Scene 
          rightTitle='Favorites'
          onRight={ () => Actions.favorites() }
          key='homepage_logout' 
          component={Homepage} 
          title='Wonie'
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
        <Scene 
          key='favorites' 
          component={FavoritesForm} 
          title='Favorites' 
          backTitle='Back'
          onBack={ () => Actions.pop() }
        />
        <Scene 
          key='movieListInfo' 
          component={MovieListInfo} 
          title='Movie Info' 
          backTitle='Back'
          onBack={ () => Actions.pop() }
        />
      </Scene>
    </Router>
  );
  
}

export default RouterComponent;
