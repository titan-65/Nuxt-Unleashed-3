<script setup lang="ts">
import { animate, spring, timeline } from "motion";

onMounted(() => {
  // This is the animation code from chap7/layouts/default.vue
  // This animation controls the box in the index.vue page
  // const animation = animate(
  //   ".box",
  //   {
  //     x: 100,
  //     y: 100,
  //     rotate: 360,
  //     scale: 2,
  //     opacity: 0,
  //     backgroundColor: "#000",
  //   },
  //   {
  //     duration: 25,
  //     easing: spring(),
  //     repeat: Infinity,
  //     direction: "alternate",
  //   }
  // );

  // Second animation example

  const rotate = [
    ".box.rotate",
    {
      rotate: 45,
    },
    {
      duration: 1,
    },
  ];
  const grow = [
    ".box.pulse",
    {
      scale: 1.1,
    },
    {
      duration: 1,
      easing: "ease-out",
    },
  ];

  timeline([rotate, grow], {
    repeat: Infinity,
    direction: "alternate",
  });
});
</script>
<template>
  <i-container>
    <i-row>
      <i-column xs="12" lg="12">
        <i-header fullscreen class="_text-align:center">
          <div class="d2">Nuxtin'</div>
          <p>
            This is a fullscreen header paragraph lorem ipsum dolor sit amet.
          </p>
          <i-button color="primary">Button</i-button>
        </i-header>
      </i-column>
    </i-row>
    <div>
      <h1>Animation</h1>
      <div class="box" />
    </div>
    <div>
      <h1>Animation Two</h1>
      <div class="box rotate" />
      <div class="box pulse" />
    </div>
    <Motion />
  </i-container>
</template>
<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
