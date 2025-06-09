import { ref, computed, type ComputedRef } from 'vue'
import { defineStore } from 'pinia'

import type { IItem, TItems } from "../shared/domain/item.domain.ts"

interface IStateReturn {
  items: ComputedRef<TItems>,
  selectedItem: ComputedRef<IItem | null>;
  selectItem: (itemSelected: IItem) => void
  unSelectItem: () => void
}

interface IState {
  items: TItems;
  selectedItem: IItem | null;
}

export default defineStore('list-single-select', (): IStateReturn => {
  const state = ref<IState>({
    items: [{
      "id": 11,
      "name": "Jacket 1"
    },
    {
      "id": 12,
      "name": "Jacket 2"
    },
    {
      "id": 13,
      "name": "Jacket 3"
    },
    {
      "id": 14,
      "name": "Jacket 4"
    },
    {
      "id": 15,
      "name": "Hoodie 1"
    },
    {
      "id": 16,
      "name": "Hoodie 2"
    },
    {
      "id": 17,
      "name": "Hoodie 3"
    },
    {
      "id": 18,
      "name": "Hoodie 4"
    }],
    selectedItem: null
  });




  const selectItem = function (itemSelected: IItem): void {
    const itemIndex = state.value.items.findIndex(i => i.id === itemSelected.id)

    const [removed] = state.value.items.splice(itemIndex, 1)

    if (state.value.selectedItem)
      state.value.items.push(state.value.selectedItem)

    state.value.selectedItem = removed
  }

  const unSelectItem = function (): void {
    if (state.value.selectedItem) {
      state.value.items.push(state.value.selectedItem)
      state.value.selectedItem = null
    }
  }

  return { items: computed(() => state.value.items), selectedItem: computed(() => state.value.selectedItem), selectItem, unSelectItem }

})