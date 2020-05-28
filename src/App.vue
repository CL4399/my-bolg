<template>
  <div id="app">
    <router-view />
    <vue-particles
      color="#000033"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="star"
      :particleSize="4"
      linesColor="#330066"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="par"
    ></vue-particles>
  </div>
</template>

<style lang="less">
 #particles-js{
        width: 100%;
        height: 100%;
        position: absolute;   //设置absolute,其他DIV设置为relative，这样这个例子效果就作为背景
        top: 5rem;
        left: 0;
        z-index: -1;
    }
</style>
