import { getList } from '../selectors'
import store from '../../../store'

describe('listVM selectors', () => {
  let selector = getList(store.getState())

  it('getList', () => {
    expect(selector).toEqual([])
  })
})
