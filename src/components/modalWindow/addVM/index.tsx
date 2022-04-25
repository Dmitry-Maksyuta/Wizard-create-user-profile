import Component from './AddVM'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import * as selectors from '../../../redux/registerVM/selectors'
import { registerVMActions } from '../../../redux/registerVM/reducer'
import { TakenStepAction } from '../../../redux/registerVM/types'
import { listActions } from '../../../redux/listVM/reducer'
import { ListItem } from '../../../redux/listVM/types'
import { DispatchProps, MyProps, MyState, StateProps } from './types'

export const mapStateToProps = (state: any) => ({
  steps: selectors.getSteps(state),
  activeStep: selectors.getActiveSteps(state),
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  setActiveStep: (payload: number) =>
    dispatch(registerVMActions.setActiveStep(payload)),
  setTakenStep: (payload: TakenStepAction) =>
    dispatch(registerVMActions.setTakenStep(payload)),
  registerVM: (payload: ListItem) =>
    dispatch(listActions.setVirtualMachine(payload)),
  reset: () => dispatch(registerVMActions.reset()),
})

export default connect<StateProps, DispatchProps, MyProps, MyState>(
  mapStateToProps,
  mapDispatchToProps
)(Component)
