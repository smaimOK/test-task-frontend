<script lang="ts" setup>
import itemsWrapper from "../items-wrapper.vue"
import item from "../item.vue"
import useListSingleSelect from "../../composables/use-list-single-select.ts"

const listSingleSelectStore = useListSingleSelect()
</script>
<template>
  <div class="block-single-select">

    <div class="block-single-select__header block">
      <item v-if="listSingleSelectStore.selectedItem" style="height: 100%;"
        :label="listSingleSelectStore.selectedItem.name" @click="listSingleSelectStore.unSelectItem()"></item>
    </div>

    <div class="block-single-select__body block">
      <items-wrapper>
        <item v-for="item in listSingleSelectStore.items" :label="item.name"
          @click="listSingleSelectStore.selectItem(item)"></item>
      </items-wrapper>
    </div>

  </div>
</template>

<style>
.block-single-select {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: end;
}

.block-single-select__header {
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 200px;
  padding: 0.2rem;
  align-self: end;
}

.block-single-select__body {
  margin: 5px 0 0 0;
  padding: 0.2rem;
  height: 100%;
}
</style>
