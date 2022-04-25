import { rootReducer } from '../../root-reducer'

export interface Step {
  name: string
  taken: boolean
}

export enum Steps {
  GENERAL_INFO,
  DESTINATION,
  SUMMARY,
}

export interface Slice {
  steps: {
    [Steps.GENERAL_INFO]: Step
    [Steps.DESTINATION]: Step
    [Steps.SUMMARY]: Step
  }
  activeStep: number
}

export interface TakenStepAction {
  key: keyof typeof Steps
  taken: boolean
}

export type RootState = ReturnType<typeof rootReducer>
