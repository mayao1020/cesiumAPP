import * as Cesium from "cesium";

import React, { Component } from "react";
import "./map.css";

import MapLeft from "../L_R-page/mapLeft";
import MapRight from "../L_R-page/mapRight";

import Point from "../shape/point";
import PolyLine from "../shape/polyline";
import PolyGon from "../shape/polygon";

export default class Map extends Component {
  state = {
    showleft: true,
    showright: true,
  };
  componentDidMount() {
    const TOKEN =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwN2UzOGQ1ZC04ZjFhLTQxYzEtOWEzMy04YTdhYWMzNDY2ODYiLCJpZCI6OTExMzMsImlhdCI6MTY1MDg1MjcxNn0.TsT3OIQrdXBMN5m5RW4Gmogr4kJCIwKHCiL2VfhU_Hk";
    Cesium.Ion.defaultAccessToken = TOKEN;
    const viewer = new Cesium.Viewer("cesiumContainer", {
      animation: false, //是否创建动画小器件，左下角仪表
      baseLayerPicker: false, //是否显示图层选择器
      fullscreenButton: false, //是否显示全屏按钮
      geocoder: false, //是否显示geocoder小器件，右上角查询按钮
      homeButton: false, //是否显示Home按钮
      infoBox: false, //是否显示信息框
      sceneModePicker: false, //是否显示3D/2D选择器,与scene3DOnly不能同时为true
      selectionIndicator: false, //是否显示选取指示器组件
      timeline: false, //是否显示时间轴
      navigationHelpButton: false, //是否显示右上角的帮助按钮
      scene3DOnly: false, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
      terrainProvider: Cesium.createWorldTerrain(),
      orderIndependentTranslucency: false,
      contextOptions: {
        webgl: {
          alpha: true,
        },
      },
    });
    viewer.scene.sun.show = false;
    viewer.scene.moon.show = false;
    viewer.scene.skyBox.show = false;
    viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0);
  }
  showLeft = (show: boolean) => {
    this.setState({
      showleft: show,
    });
  };
  showRight = (show: boolean) => {
    this.setState({
      showright: show,
    });
  };

  render() {
    return (
      <div className="React-Map">
        <div className="map" id="cesiumContainer"></div>
        {this.state.showleft ? (
          <div className="map-left">
            <MapLeft show={this.showLeft} />
          </div>
        ) : (
          <input
            type="button"
            value="打开"
            className="left-show"
            onClick={() => {
              this.setState({ showleft: true });
            }}
          />
        )}
        {this.state.showright ? (
          <div className="map-right">
            <MapRight show={this.showRight} />
          </div>
        ) : (
          <input
            type="button"
            value="打开"
            className="right-show"
            onClick={() => {
              this.setState({ showright: true });
            }}
          />
        )}
      </div>
    );
  }
}
