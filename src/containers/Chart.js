import React, { Component } from 'react';
import './Chart.css';
import { connect } from 'react-redux';

class Chart extends Component {
	renderTable(sales) {
		return(
			<tr key={sales.weekEnding}>
				<td>{sales.weekEnding}</td>
				<td>{sales.retailSales}</td>
				<td>{sales.wholesaleSales}</td>
				<td>{sales.unitsSold}</td>
				<td>{sales.retailerMargin}</td>
			</tr>
		);
	}

  render() {
    const { data } = this.props;
    return (
      <div className="Chart">
        <table>
        <thead>
            <tr>
                <th>Week Ending</th>
                <th>Retail Sales</th> 
                <th>Wholesale Sales</th>
                <th>Units Sold</th>
                <th>Retailer Margin</th>
            </tr>
        </thead>
        <tbody>
            { data.sales && data.sales.map(this.renderTable) }
        </tbody>        
        </table>
      </div>
    );
  }
}

function mapStateToProps({ data }) {
  return { data };
}

export default connect(mapStateToProps, null)(Chart);