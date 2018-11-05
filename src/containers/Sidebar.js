import React, { Component } from 'react';
import './Sidebar.css';
import { connect } from 'react-redux';

class Sidebar extends Component {
  renderTags(data) {
    return(
      <span key={ data }>{ data }</span>
    );
  }

  render() {
    const { data } = this.props;
    return (
      <div className="Sidebar">
        <img className="Product-image" src={ data.image } alt={data.brand}/> 
        <h2 className="Title">{ data.title }</h2>
        <p className="Subtitle">{ data.subtitle }</p>
        <hr />
        <div className="Tags">
          {data.tags && data.tags.map(this.renderTags)}
        </div>
        <hr />
        <div className="Overview">OVERVIEW</div>
        <div className="Sales">SALES</div>
      </div>
    );
  }
}

function mapStateToProps({ data }) {
  return { data };
}

export default connect(mapStateToProps, null)(Sidebar);
  