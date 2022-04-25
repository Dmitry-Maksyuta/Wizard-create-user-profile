import Component from './ViewVM'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import * as selectors from '../../../redux/listVM/selectors'
import { listActions } from '../../../redux/listVM/reducer'
import { StateProps, DispatchProps, MyProps, MyState } from './types'

export const mapStateToProps = (state: any) => ({
  list: selectors.getList(state),
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeActive: (payload: number) =>
    dispatch(listActions.setChangeVMActive(payload)),
  changeSelect: (payload: number) =>
    dispatch(listActions.setChangeVMSelect(payload)),
  deleteVM: () => dispatch(listActions.deleteSelectedVM()),
  selectedAll: (payload: boolean) =>
    dispatch(listActions.setAllSelectVM(payload)),
})

export default connect<StateProps, DispatchProps, MyProps, MyState>(
  mapStateToProps,
  mapDispatchToProps
)(Component)
