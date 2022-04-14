<!--
 * @Descripttion: 
 * @version: 
 * @Author: alan.lau
 * @Date: 2022-04-14 14:17:46
 * @LastEditors: alan.lau
 * @LastEditTime: 2022-04-14 16:16:06
-->
<template>
  <div class="container">
    <div id="cesiumContainer"></div>
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style>
</style>
</template>
<script>
const Cesium = require("cesium/Cesium");

export default {
  mounted() {
    const viewerOption = {
      // 需要进行可视化的数据源的集合
      animation: false, // 是否显示动画控件
      shouldAnimate: false,
      homeButton: false, // 是否显示Home按钮
      fullscreenButton: false, // 是否显示全屏按钮
      baseLayerPicker: false, // 是否显示图层选择控件
      geocoder: false, // 是否显示地名查找控件
      timeline: false, // 是否显示时间线控件
      sceneModePicker: false, // 是否显示投影方式控件
      navigationHelpButton: false, // 是否显示帮助信息控件
      infoBox: false, // 是否显示点击要素之后显示的信息
      requestRenderMode: false, // 启用请求渲染模式
      scene3DOnly: false, // 每个几何实例将只能以3D渲染以节省GPU内存
      selectionIndicator: false,
      sceneMode: 3, // 初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode
    //   imageryProvider: false,
      // imageryProvider: imageryProvider
    };
    Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMTBjN2E3Mi03ZGZkLTRhYmItOWEzNC1iOTdjODEzMzM5MzgiLCJpZCI6NDQsImlhdCI6MTQ4NjQ4NDM0M30.B3C7Noey3ZPXcf7_FXBEYwirct23fsUecRnS12FltN8";

    Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(
      90,
      -20,
      110,
      90
    );

    window.viewer = new Cesium.Viewer("cesiumContainer", viewerOption)
    viewer.scene.debugShowFramesPerSecond = true
  },
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: #c5247d;
  height: 600px;
  width: 800px;
  overflow: hidden;
}
#cesiumContainer {
  display: flex;
  flex-direction: column;
  background-color: #c5247d;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
