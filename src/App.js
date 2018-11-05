import React, { Component } from 'react';
import './App.css';
import Sidebar from './containers/Sidebar';
import Graphics from './components/Graphics';
import Header from './components/Header';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchData} from './actions/index';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="Content">
          <Sidebar />
          <Graphics /> 
        </div>     
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);


