import { RootState } from './types'

export const getSteps = (state: RootState) => state.registerVM.steps;

export const getActiveSteps = (state: RootState) => state.registerVM.activeStep;
