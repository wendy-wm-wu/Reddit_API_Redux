import React, { Component } from 'react';
import { Provider } from 'react-redux';

export default class Root extends Component {
  render() {
    return (
      <Provider></Provider>
    );
  }
}

//provide store state to the rest of the application