<script lang="ts" setup>
import useListMultiSelect from "../../composables/use-list-multi-select.ts"
import itemsWrapper from "../items-wrapper.vue"
import item from "../item.vue"

const listMultiSelectStore = useListMultiSelect()

</script>
<template>
  <div class="block-multi-select">
    <div class="block-multi-select__header block">
      <items-wrapper>
        <item v-for="item in listMultiSelectStore.selectedItems" :label="item.name"
          @click="listMultiSelectStore.unSelectItem(item)"></item>
      </items-wrapper>

      <div> selected: {{ listMultiSelectStore.countSelected }} / {{ listMultiSelectStore.countTotal }}</div>
    </div>
    <div class="block-multi-select__body block">
      <items-wrapper>
        <item v-for="item in listMultiSelectStore.items" :label="item.name"
          @click="listMultiSelectStore.selectItem(item)"></item>
      </items-wrapper>
    </div>
  </div>
</template>

<style>
.block-multi-select {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.block-multi-select__header {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 200px;
  padding: 0.2rem;
}

.block-multi-select__body {
  margin: 5px 0 0 0;
  padding: 0.2rem;
  height: 100%;
}
</style>
