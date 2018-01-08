import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA8Ymkdcg0SWPMLGBLLOJgJOLys58DXo4c',
      authDomain: 'manager-835ce.firebaseapp.com',
      databaseURL: 'https://manager-835ce.firebaseio.com',
      projectId: 'manager-835ce',
      storageBucket: 'manager-835ce.appspot.com',
      messagingSenderId: '752280314920'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
