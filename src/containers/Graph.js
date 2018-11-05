import React, { Component } from 'react';
import './Graph.css';
import { connect } from 'react-redux';
import 'react-vis/dist/style.css';
import {FlexibleXYPlot, LineSeries} from 'react-vis';

class Graph extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="Graph">
        <h4>Retail Sales</h4>
        {data.retailData &&
          <div className="Graph-plot">
            <FlexibleXYPlot height={140} stackBy="y">
              <LineSeries data={data.retailData} curve={'curveMonotoneX'} color="#989898"/>
              <LineSeries data={data.wholesaleData} curve={'curveMonotoneX'} />
            </FlexibleXYPlot>
          </div>
        }
        <hr />
        <div className="months">
          <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
          <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ data }) {
  return { data };
}

export default connect(mapStateToProps, null)(Graph);