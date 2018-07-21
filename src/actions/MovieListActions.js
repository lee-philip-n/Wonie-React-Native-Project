import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { FETCH_FAV } from './types';


export const addToFav = (movie) => {
  const { currentUser } = firebase.auth();

  movie.favorited = true;
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/fav`)
      .push(movie)
      .then(() => {
        Actions.pop();
      })
  };
};

export const fetchFav = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/fav`)
      .on('value', snapshot => {
        dispatch({ type: FETCH_FAV, payload: snapshot.val() })
      });
  };
}

export const removeFav = (uid) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/fav/${uid}`)
      .remove()
      .then(() => {
        Actions.pop();
      });
  };
};