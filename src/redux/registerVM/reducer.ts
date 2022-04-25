import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Slice, Steps, TakenStepAction } from './types'
import contents from '../../consts/text.json'

const name = 'registerVM'

const initialState: Slice = {
  steps: {
    [Steps.GENERAL_INFO]: {
      name: contents.components.modalWindow.add.steps[0],
      taken: false,
    },
    [Steps.DESTINATION]: {
      name: contents.components.modalWindow.add.steps[1],
      taken: false,
    },
    [Steps.SUMMARY]: {
      name: contents.components.modalWindow.add.steps[2],
      taken: false,
    },
  },
  activeStep: Steps.GENERAL_INFO,
}

export const registerVMSlice = createSlice({
  name,
  initialState,

  reducers: {
    setActiveStep(state, { payload }: PayloadAction<number>) {
      state.activeStep = payload
    },
    setTakenStep(state, { payload }: PayloadAction<TakenStepAction>) {
      const { key, taken } = payload
      state.steps[Steps[key]].taken = taken
    },
    reset: () => initialState,
  },
})

export const registerVMActions = {
  setTakenStep: registerVMSlice.actions.setTakenStep,
  setActiveStep: registerVMSlice.actions.setActiveStep,
  reset: registerVMSlice.actions.reset,
}

export const registerVM = registerVMSlice.reducer
