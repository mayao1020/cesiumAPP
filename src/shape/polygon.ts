import Cesium from "cesium";

export default class PolyGon {
  viewer!: Cesium.Viewer;
  polygonEntity!: Cesium.Entity;
  constructor(viewer: Cesium.Viewer) {
    this.viewer = viewer;
  }
  addPolygon(positions: Cesium.Cartesian3[]) {
    this.polygonEntity = this.viewer.entities.add({
      polygon: {
        hierarchy: new Cesium.CallbackProperty(function () {
          return new Cesium.PolygonHierarchy(positions);
        }, false),
        material: Cesium.Color.RED.withAlpha(0.5),
      },
    });
  }
}
