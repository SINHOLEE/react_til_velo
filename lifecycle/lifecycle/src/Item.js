import React, { Component } from "react";

class Item extends Component {
  handleClick = (e) => {
    this.props.propsOnClick();
  };
  componentWillUnmount() {
    console.log(" item componentWillUnmount");
  }

  render() {
    const style = {
      border: "1px solid black",
    };
    return (
      <div
        style={style}
        key={this.props.number}
        onDoubleClick={this.handleClick}
      >
        {this.props.number}
      </div>
    );
  }
}

export default Item;
