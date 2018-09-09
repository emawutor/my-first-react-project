import React, { Component } from 'react';

class Counter extends Component {
  state = {}
  render() {
    state = {
      count: 0,
      tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
      fontSize: 10,
      fontWeight: "bold"
    }

    {/*constructor() {
          super();
          this.handleIncrement = this.handleIncrement.bind(this);
        }*/}

    handleIncrement = () => {
      this.setState( { count: this.state.count + 1});
    }

    return (
      <div>
        <span style={ { } } className={this.getBadgeClasses}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className= "btn btn-secondary btn-small-">Increment</button>
      <ul>
        {this.state.tags.map(tag =>
          <li key={tag}>
          {tag}
          </li>
        }
      </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
  }

  formatCount() {
    const { count } = this.state
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;


{/* each map should have a key that is unique, add an id name or object to key */}
{/*using arraw function is cleaner and simpler than using a constructor*/}
{/*in react you have to explicitly tell it what has changes using this.setState*/}
