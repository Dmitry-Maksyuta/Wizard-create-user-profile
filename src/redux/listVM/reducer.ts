import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ListItem, Slice } from './types'

const name = 'listVM'

const initialState: Slice = {
  list: [],
}

export const listSlice = createSlice({
  name,
  initialState,

  reducers: {
    setAllSelectVM(state, { payload }: PayloadAction<boolean>) {
      state.list = state.list.map((item) => ({ ...item, select: payload }))
    },
    deleteSelectedVM(state) {
      state.list = state.list.filter((item) => !item.select)
    },
    setVirtualMachine(state, { payload }: PayloadAction<ListItem>) {
      state.list.push(payload)
    },
    setChangeVMActive(state, { payload }: PayloadAction<number>) {
      state.list[payload].active = !state.list[payload].active
    },
    setChangeVMSelect(state, { payload }: PayloadAction<number>) {
      state.list[payload].select = !state.list[payload].select
    },
  },
})

export const listActions = {
  setAllSelectVM: listSlice.actions.setAllSelectVM,
  deleteSelectedVM: listSlice.actions.deleteSelectedVM,
  setVirtualMachine: listSlice.actions.setVirtualMachine,
  setChangeVMActive: listSlice.actions.setChangeVMActive,
  setChangeVMSelect: listSlice.actions.setChangeVMSelect,
}

export const listVM = listSlice.reducer
