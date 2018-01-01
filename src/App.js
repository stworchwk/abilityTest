import React, { Component } from 'react';
import { Provider } from 'react-redux';

import MasterLayout from './Layouts/MasterLayout';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MasterLayout />
      </Provider>
    );
  }
}

export default App;
