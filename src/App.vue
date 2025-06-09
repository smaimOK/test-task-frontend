<script setup lang="ts">
import itemsWrapper from "./components/items-wrapper.vue"
import multiSelection from "./components/selection/multi-selection.vue"
import singleSelection from "./components/selection/single-selection.vue"

</script>

<template>
  <div class="common">
    <div class="common__wrapper">
      <div style="display: flex; height: 100%;">
        <multi-selection style="margin-right: 10px;"></multi-selection>
        <single-selection></single-selection>
      </div>
    </div>
  </div>
</template>

<style scoped>
.common {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.common__wrapper {
  padding: 1rem;
  border: solid 5px black;
  width: 60vw;
  height: 80vh;
}
</style>
