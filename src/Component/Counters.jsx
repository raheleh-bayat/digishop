import React, { Component } from 'react'

import Tamrin from './Tamrin';
class Counters extends Component {
    
    render() { 
        return (
        <div>
             <button onClick={this.props.onReset}>reset</button>
             {this.props.counters.map( counter => 
             <Tamrin key={counter.id} 
             onDelete={this.props.onDelete} 
             onIncrement = {this.props.onIncrement}
             counter={counter}
             />)} 
        </div>
        );
    }
}
 
export default Counters;