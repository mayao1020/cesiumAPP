import React, { Component } from "react";
import "./mapleft.css";
interface LeftProps {
  show: (show: boolean) => void;
}
export default class MapLeft extends Component<LeftProps> {
  show = true;
  showDiv = () => {
    if (this.show === true) {
      this.show = false;
    } else {
      this.show = true;
    }
    this.props.show(this.show);
  };
  render() {
    return (
      <>
        <input
          type="button"
          value="收起"
          onClick={() => {
            this.showDiv();
          }}
        />
      </>
    );
  }
}
