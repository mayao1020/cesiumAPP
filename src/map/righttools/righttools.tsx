import React, { Component } from "react";
import "./righttools.css";
import selectDiv from "../image/select.png";

const maps = ["map1", "map2", "map3"];

export default class righttools extends Component {
  state = {
    show: true,
  };
  render() {
    return (
      <div className="right_tools">
        <div className="show_text">显示方式</div>
        <img
          className={this.state.show ? "select_img1" : "select_img2"}
          src={selectDiv}
          alt=""
          onClick={() => {
            if (this.state.show) {
              this.setState({ show: false });
            } else {
              this.setState({ show: true });
            }
          }}
        />
        <div className={this.state.show ? "right_top" : "right_top_no"}>
          <div className="maps">
            {maps.map((item: string, index: number) => {
              return <div key={item} id="maps" className={item}></div>;
            })}
          </div>
        </div>
        <div className="right_center"></div>
        <div className="right_bottom"></div>
      </div>
    );
  }
}
