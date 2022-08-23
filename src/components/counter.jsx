import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrment}
        >
          +
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses = () => {
    let badgeType = !this.state.count ? "warning" : "primary";

    return `badge bg-${badgeType} m-2`;
  };

  formatCounter = () => {
    const { count } = this.state;
    return count ? count : "zero";
  };
}

export default Counter;
