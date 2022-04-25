import { checkApi, checkValue } from '../validations'

test('checkApi', () => {
  const expected1 = checkApi('192.168.1.1')
  const received1 = true
  expect(expected1).toEqual(received1)

  const expected2 = checkApi('192.168.1.256')
  const received2 = false
  expect(expected2).toEqual(received2)

  const expected3 = checkApi('')
  const received3 = false
  expect(expected3).toEqual(received3)

  const expected4 = checkApi('256.256.256.256')
  const received4 = false
  expect(expected4).toEqual(received4)

  const expected5 = checkApi('0.0.0.0')
  const received5 = true
  expect(expected5).toEqual(received5)
})

test('checkValue', () => {
  const expected1 = checkValue('')
  const received1 = false
  expect(expected1).toEqual(received1)

  const expected2 = checkValue('test')
  const received2 = true
  expect(expected2).toEqual(received2)
})
