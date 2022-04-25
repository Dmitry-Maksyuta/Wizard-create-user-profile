import { Steps, TakenStepAction } from '../../../redux/registerVM/types'
import { ListItem } from '../../../redux/listVM/types'

export type EnumKeysAsStrings = keyof typeof Steps

export interface StateProps {
  steps: any
  activeStep: number
}

export interface DispatchProps {
  setActiveStep: (payload: number) => void
  setTakenStep: (payload: TakenStepAction) => void
  registerVM: (payload: ListItem) => void
  reset: () => void
}

export interface MyProps {
  toggle: () => void
}

export interface MyState {
  api: string
  login: string
  password: string
  processor: string
  nameVM: string
  repository: string
  active: boolean
  validations: {
    api: null | boolean
    login: null | boolean
    password: null | boolean
    processor: null | boolean
    nameVM: null | boolean
  }
  processorTypes: string[]
}

export type Props = StateProps & DispatchProps & MyProps
