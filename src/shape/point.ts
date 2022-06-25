import Cesium from "cesium";

export default class Point {
  viewer!: Cesium.Viewer;
  pointEntity!: Cesium.Entity;
  constructor(viewer: Cesium.Viewer) {
    this.viewer = viewer;
  }
  addPoint(position: Cesium.Cartesian3) {
    this.pointEntity = this.viewer.entities.add({
      position: position,
      point: {
        color: Cesium.Color.RED,
        pixelSize: 5,
      },
    });
  }
}
