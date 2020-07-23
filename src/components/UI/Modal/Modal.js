import React, { Component } from "react";

import "./Modal.css";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <div
        className="Modal"
        style={{
          transform: this.props.show ? "translateY(0)" : "translateY(-400vh)",
          opacity: this.props.show ? "1" : "0",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Modal;
