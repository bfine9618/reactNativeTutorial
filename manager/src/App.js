import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import Router from './Router';
import LoginForm from './components/LoginForm';


class App extends Component {

  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyA8Ymkdcg0SWPMLGBLLOJgJOLys58DXo4c',
        authDomain: 'manager-835ce.app.com',
        databaseURL: 'https://manager-835ce.io.com',
        projectId: 'manager-835ce',
        storageBucket: 'manager-835ce.appspot.com',
        messagingSenderId: '752280314920'
      }
    );
  }

  render() {
    const store = createStore(reducers,
      {},
      applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
