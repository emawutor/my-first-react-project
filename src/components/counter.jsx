import React, { Component } from 'react';

class Counter extends Component {
  /*state = {
        value: this.props.counter.value,
        tags: ['tag1', 'tag2', 'tag3']
      };*/

    styles = {
      fontSize: 10,
      fontWeight: "bold"
    }

    /*handleIncrement = () => {
          this.setState( { value: this.state.value + 1});
        parent will handle this state*/

  render() {
    {/*constructor() {
          super();
          this.handleIncrement = this.handleIncrement.bind(this);
        }*/}
    return (
      <div>
        <span style={ this.styles } className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className= "btn btn-secondary btn-sm">Increment</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className= "btn btn-danger btn-sm m-2">Delete</button>
      {/*<ul>
              {this.state.tags.map(tag =>
                <li key={tag}>
                {tag}
                </li>)
              }
            </ul>*/}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;


{/* each map should have a key that is unique, add an id name or object to key */}
{/*using arraw function is cleaner and simpler than using a constructor*/}
{/*in react you have to explicitly tell it what has changes using this.setState*/}

{/*controlled component doesnt have its own local state, recieves state from its parent via props*/}
