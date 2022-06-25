import Cesium from "cesium";

export default class Area {
  viewer!: Cesium.Viewer;
  constructor(viewer: Cesium.Viewer) {
    this.viewer = viewer;
  }

  addArea(measure: boolean) {
    const handler = new Cesium.ScreenSpaceEventHandler(this.viewer.canvas);
    handler.setInputAction((e: any) => {
      console.log(1);
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    handler.setInputAction((e: any) => {
      console.log(1);
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    handler.setInputAction((e: any) => {
      console.log(1);
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  }
}
