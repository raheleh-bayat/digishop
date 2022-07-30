import React, { Component } from "react"
class Tamrin extends Component{

    // formTag(){
    //     if(this.state.tags.length === 0) return "wrong";
    //     return <ul>{this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
    // }

    render(){
        return(
        <div>
            <strong style={this.style}>{this.formatCount()}</strong>
            <button onClick={() => { this.props.onIncrement(this.props.counter)} } > incream </button>
            {/* {this.formTag()}    */}
            <button onClick={() => {this.props.onDelete(this.props.counter.id)} }>delete</button>
        </div>
        
        )
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'blue' : value
    }
}
export default Tamrin;