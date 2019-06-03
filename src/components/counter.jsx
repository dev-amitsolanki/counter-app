import React, { Component } from "react";

class Counter extends Component {
  handleIncrement() {
    this.setState({ count: this.props.counter.value + 1 });
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return this.props.counter.value === 0
      ? (classes += "warning")
      : (classes += "primary");
  };
  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm"
          > + </button>
          <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2" disabled={this.props.counter.value === 0 ? "disabled" : ''}
          > - </button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm"
          >Delete</button>
        </div>
      </div>
    );
  }
}

export default Counter;
