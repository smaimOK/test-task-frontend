import { ref, computed, type ComputedRef } from 'vue'
import { defineStore } from 'pinia'

import type { IItem, TItems } from "../shared/domain/item.domain.ts"

interface IStateReturn {
  items: TItems,
  selectedItems: TItems;
  countSelected: ComputedRef<Number>;
  countTotal: ComputedRef<Number>;
  selectItem: (itemSelected: IItem) => void
  unSelectItem: (itemSelected: IItem) => void
}

interface IState {
  items: TItems
  selectedItems: TItems
}

export default defineStore('list-multi-select', (): IStateReturn => {
  const state = ref<IState>({
    items: [{
      "id": 1,
      "name": "Shoes 1"
    },
    {
      "id": 2,
      "name": "Shoes 2"
    },
    {
      "id": 3,
      "name": "Shoes 3"
    },
    {
      "id": 4,
      "name": "Shoes 4"
    },
    {
      "id": 5,
      "name": "T-shirt 1"
    },
    {
      "id": 6,
      "name": "T-shirt 2"
    },
    {
      "id": 7,
      "name": "T-shirt 3"
    },
    {
      "id": 8,
      "name": "T-shirt 4"
    }],
    selectedItems: []
  });


  const countSelected = computed(() => {
    return state.value.selectedItems.length
  })

  const countTotal = computed(() => {
    return 6
  })

  const selectItem = function (itemSelected: IItem): void {
    if (countSelected.value >= 6) return;

    const itemIndex = state.value.items.findIndex(i => i.id === itemSelected.id)

    const [removed] = state.value.items.splice(itemIndex, 1)
    state.value.selectedItems.push(removed)
  }

  const unSelectItem = function (itemSelected: IItem): void {
    const itemIndex = state.value.selectedItems.findIndex(i => i.id === itemSelected.id)

    const [removed] = state.value.selectedItems.splice(itemIndex, 1)
    state.value.items.push(removed)
  }

  return { items: state.value.items, selectedItems: state.value.selectedItems, countSelected, countTotal, selectItem, unSelectItem }

})