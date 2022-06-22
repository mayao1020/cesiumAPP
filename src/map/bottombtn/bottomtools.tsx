import React, { Component } from "react";
import bottom1 from "../image/bottom1.png";
import bottom2 from "../image/bottom2.png";
import bottom3 from "../image/bottom3.png";
import bottom4 from "../image/bottom4.png";
import bottom5 from "../image/bottom5.png";
import bottom6 from "../image/bottom6.png";
import bottom7 from "../image/bottom7.png";
import bottom8 from "../image/bottom8.png";
import bottom9 from "../image/bottom9.png";
import bottom10 from "../image/bottom10.png";
import bottom11 from "../image/bottom11.png";
import bottom12 from "../image/bottom12.png";
import bottom13 from "../image/bottom13.png";
import "./bottomtools.css";

interface BottomToolsProps {
  type: (type: string) => void;
}

const tools = [
  { index: bottom1, type: "3Dearth", name: "3D地球" },
  { index: bottom2, type: "graticules", name: "经纬网" },
  { index: bottom3, type: "full_screen", name: "全屏地球" },
  { index: bottom4, type: "picture", name: "图片" },
  { index: bottom5, type: "...", name: "" },
  { index: bottom6, type: "one_revolution", name: "旋转一周" },
  { index: bottom7, type: "", name: "" },
  { index: bottom8, type: "place", name: "标点" },
  { index: bottom9, type: "distance", name: "距离测量" },
  { index: bottom10, type: "area", name: "面积测量" },
  { index: bottom11, type: "save", name: "保存" },
  { index: bottom12, type: "delete", name: "删除" },
  { index: bottom13, type: "reset", name: "重置" },
];
export default class bottomtools extends Component<BottomToolsProps> {
  render() {
    return (
      <div className="tools">
        {tools.map((item: any, index: number) => (
          <img
            className="imgs"
            key={item.index}
            src={item.index}
            alt=""
            title={item.name}
            onClick={() => {
              this.props.type(item.type);
            }}
          />
        ))}
      </div>
    );
  }
}
