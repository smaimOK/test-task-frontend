<template>
  <div class="items__wrapper">
    <slot name="default"></slot>
  </div>
</template>

<style>
.items__wrapper {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
}

.items__wrapper .item {
  margin: 2px;
}
</style>