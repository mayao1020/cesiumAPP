import Cesium from "cesium";
import Material from "cesium/Source/Scene/Material";

export default class PolyLine {
  viewer!: Cesium.Viewer;
  polylineEntity!: Cesium.Entity;
  constructor(viewer: Cesium.Viewer) {
    this.viewer = viewer;
  }
  addPolyline(positions: Cesium.Cartesian3[]) {
    this.polylineEntity = this.viewer.entities.add({
      polyline: {
        positions: new Cesium.CallbackProperty(function () {
          return positions;
        }, false),
        width: 3,
        material: Cesium.Color.RED,
        clampToGround: true,
      },
    });
  }
}
