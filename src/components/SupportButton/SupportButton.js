import React, { Component } from "react";
import style from "./SupportButton.module.css";

class SupportButton extends Component {
  state = {
    buttonValue: "contact_support"
  };

  changeValue = e => {
    const { buttonValue } = this.state;
    if (buttonValue === "contact_support")
      this.setState({ buttonValue: "clear" });
    else this.setState({ buttonValue: "contact_support" });
  };

  render() {
    const { buttonValue } = this.state;
    return (
      <div className={style.round} onClick={this.changeValue}>
        <i className="material-icons" width="24">
          {buttonValue}
        </i>
      </div>
    );
  }
}

export default SupportButton;
