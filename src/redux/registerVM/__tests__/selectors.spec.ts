import { getSteps, getActiveSteps } from '../selectors'
import store from '../../../store'
import { Steps } from '../types'
import contents from '../../../consts/text.json'

describe('registerVM selectors', () => {
  it('getSteps', () => {
    let selector = getSteps(store.getState())
    expect(selector).toEqual({
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
    })
  })

  it('getActiveSteps', () => {
    let selector = getActiveSteps(store.getState())
    expect(selector).toEqual(Steps.GENERAL_INFO)
  })
})
