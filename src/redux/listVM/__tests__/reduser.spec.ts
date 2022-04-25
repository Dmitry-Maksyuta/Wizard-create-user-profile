import store from '../../../store'
import { listActions } from '../reducer'

const mockItem = {
  api: '168.192.1.1',
  login: 'test',
  password: 'password',
  processor: 'intel',
  repository: 'repo_1',
  name: 'vm_1',
  active: true,
  select: false,
}

test('listActions > setVirtualMachine', () => {
  let state = store.getState().listVM.list
  expect(state).toEqual([])

  store.dispatch(listActions.setVirtualMachine(mockItem))
  state = store.getState().listVM.list
  expect(state).toEqual([mockItem])
})

test('listActions > setAllSelectVM', () => {
  let state = store.getState().listVM.list
  expect(state).toEqual([mockItem])

  store.dispatch(listActions.setVirtualMachine(mockItem))
  store.dispatch(listActions.setAllSelectVM(true))
  state = store.getState().listVM.list
  expect(state).toEqual([
    {
      api: '168.192.1.1',
      login: 'test',
      password: 'password',
      processor: 'intel',
      repository: 'repo_1',
      name: 'vm_1',
      active: true,
      select: true,
    },
    {
      api: '168.192.1.1',
      login: 'test',
      password: 'password',
      processor: 'intel',
      repository: 'repo_1',
      name: 'vm_1',
      active: true,
      select: true,
    },
  ])
})

test('listActions > setChangeVMSelect', () => {
  store.dispatch(listActions.setChangeVMSelect(0))
  let state = store.getState().listVM.list
  expect(state).toEqual([
    {
      api: '168.192.1.1',
      login: 'test',
      password: 'password',
      processor: 'intel',
      repository: 'repo_1',
      name: 'vm_1',
      active: true,
      select: false,
    },
    {
      api: '168.192.1.1',
      login: 'test',
      password: 'password',
      processor: 'intel',
      repository: 'repo_1',
      name: 'vm_1',
      active: true,
      select: true,
    },
  ])
})

test('listActions > setChangeVMActive', () => {
  store.dispatch(listActions.setChangeVMActive(0))
  let state = store.getState().listVM.list
  expect(state).toEqual([
    {
      api: '168.192.1.1',
      login: 'test',
      password: 'password',
      processor: 'intel',
      repository: 'repo_1',
      name: 'vm_1',
      active: false,
      select: false,
    },
    {
      api: '168.192.1.1',
      login: 'test',
      password: 'password',
      processor: 'intel',
      repository: 'repo_1',
      name: 'vm_1',
      active: true,
      select: true,
    },
  ])
  store.dispatch(listActions.setChangeVMActive(1))
  state = store.getState().listVM.list
  expect(state).toEqual([
    {
      api: '168.192.1.1',
      login: 'test',
      password: 'password',
      processor: 'intel',
      repository: 'repo_1',
      name: 'vm_1',
      active: false,
      select: false,
    },
    {
      api: '168.192.1.1',
      login: 'test',
      password: 'password',
      processor: 'intel',
      repository: 'repo_1',
      name: 'vm_1',
      active: false,
      select: true,
    },
  ])
})

test('listActions > deleteSelectedVM', () => {
  store.dispatch(listActions.deleteSelectedVM())
  let state = store.getState().listVM.list
  expect(state).toEqual([
    {
      api: '168.192.1.1',
      login: 'test',
      password: 'password',
      processor: 'intel',
      repository: 'repo_1',
      name: 'vm_1',
      active: false,
      select: false,
    },
  ])
})
