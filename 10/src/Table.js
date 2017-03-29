import React, { Component } from 'react';
import './App.css';

class Table extends Component {
  render() {
    return (
      <div className='fluid-grid'>
          <div className='row'>
            <div className='col-sm-4'>
                1
            </div>
            <div className='col-sm-4'>
                2
            </div>
            <div className='col-sm-4'>
                <button className='btn btn-info'>Button</button>
            </div>
          </div>
      </div>
    );
  }
}

export default Table;
