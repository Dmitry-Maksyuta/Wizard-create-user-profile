import store from '../../../store'
import { registerVMActions } from '../reducer'

test('registerVMActions > setActiveStep', () => {
  let state = store.getState().registerVM.activeStep
  expect(state).toEqual(0)

  store.dispatch(registerVMActions.setActiveStep(1))
  state = store.getState().registerVM.activeStep
  expect(state).toEqual(1)

  store.dispatch(registerVMActions.setActiveStep(2))
  state = store.getState().registerVM.activeStep
  expect(state).toEqual(2)
})

test('registerVMActions > setTakenStep', () => {
  let state = store.getState().registerVM.steps
  expect(state).toEqual({
    '0': { name: 'General Info', taken: false },
    '1': { name: 'Destination', taken: false },
    '2': { name: 'Summary', taken: false },
  })

  store.dispatch(
    registerVMActions.setTakenStep({ key: 'GENERAL_INFO', taken: true })
  )
  state = store.getState().registerVM.steps
  expect(state).toEqual({
    '0': { name: 'General Info', taken: true },
    '1': { name: 'Destination', taken: false },
    '2': { name: 'Summary', taken: false },
  })
})

test('registerVMActions > reset', () => {
  let state = store.getState().registerVM
  expect(state).toEqual({
    activeStep: 2,
    steps: {
      '0': { name: 'General Info', taken: true },
      '1': { name: 'Destination', taken: false },
      '2': { name: 'Summary', taken: false },
    },
  })

  store.dispatch(registerVMActions.reset())
  state = store.getState().registerVM
  expect(state).toEqual({
    activeStep: 0,
    steps: {
      '0': { name: 'General Info', taken: false },
      '1': { name: 'Destination', taken: false },
      '2': { name: 'Summary', taken: false },
    },
  })
})
