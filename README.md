# muviDB

muviDB is a simple project utilizing React Native and Redux to retrieve/display movie information in an ios/android application.

Features:
1) Users can input a movie title to retrieve a list of movies along with each retrieved movie's information (poster pic, synopsis, etc).
2) Users can create an account using an email and password combination.
3) When logged in, users can save/remove movies to/from their favorites list.

Tech Stack:
  axios, 
  firebase,
  lodash,
  react,
  react-native,
  react-native-router-flux,
  react-redux,
  redux,
  redux-thunk

Cloning directions:
1) clone the repo.
2) run "npm install".
3) setup your own firebase project.
4) request your own api key from 'The Movie Database' (https://www.themoviedb.org/).
5) replace the information in the config.example.js file with the configs from firebase and tmDB.
6) rename config.example.js to just config.js.
7) run simulator from the directory (for ios: "react-native run-ios").