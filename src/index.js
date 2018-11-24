import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App, Home, Login, Register, Wall } from 'containers';
import { MainPage } from './components/index';
import { Provider } from 'react-redux';
import { Mission } from './components/MisstionGroup/index.js';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import { FreeBoard, WriteBoard } from './components/Board/index';

const store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MainPage} />
        <Route path="writeboard" component={WriteBoard} />
        <Route path="FreeBoard" component={FreeBoard} />
        <Route path="main" component={MainPage} />
        <Route path="home" component={Home} />
        <Route path="mission" component={Mission} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="wall/:username" component={Wall} />
      </Route>
    </Router>
  </Provider>,
  rootElement
);
