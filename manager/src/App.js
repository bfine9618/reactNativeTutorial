import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import {
  firebaseApiKey,
  firebaseAuthDomain,
  firebaseDatabaseURL,
  firebaseProjectId,
  firebaseStorageBucket,
  firebaseMessagingSenderId,
  } from 'react-native-config'
;
//import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import Router from './Router';
import LoginForm from './components/LoginForm';


class App extends Component {

  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: firebaseApiKey,
        authDomain: firebaseAuthDomain,
        databaseURL: firebaseDatabaseURL,
        projectId: firebaseProjectId,
        storageBucket: firebaseStorageBucket,
        messagingSenderId: firebaseMessagingSenderId
      }
    );
  }

  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
