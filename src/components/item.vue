<script lang="ts" setup>
interface IProps {
  label?: string;
}

const props = defineProps<IProps>();
</script>
<template>
  <div class="block item">
    {{ label }}
  </div>
</template>

<style>
.item {
  padding: 5px;
  height: 23px;
  cursor: pointer;
}
</style>