import React, { Component } from 'react';
import Graph from '../containers/Graph';
import Chart from '../containers/Chart';

export default class Graphics extends Component {
  render() {
    return (
      <div className="Graphics">
       <Graph />
       <Chart />
      </div>
    );
  }
}