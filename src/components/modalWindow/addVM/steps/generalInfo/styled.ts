import styled from 'styled-components'

export const Wrapper = styled.div``

export const Label = styled.div`
  font-size: 12px;
`

export const Input = styled.input<{ validation: null | boolean }>`
  font-size: 15px;
  font-weight: 300;
  padding: 0 10px;
  border: 1px solid ${({validation}) => validation === false ? '#da263b' : '#dee0e2'};
  height: 28px;
  width: 300px;
  outline: none;
  margin: 5px 0 15px 0;
`

export const Container = styled.div`
  position: relative;
`

export const Icon = styled.img`
  width: 16px;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 7px;
  padding: 5px;
`

export const Select = styled.select<{ validation: null | boolean }>`
  font-size: 15px;
  font-weight: 300;
  padding: 0 10px;
  border: 1px solid ${({validation}) => validation === false ? '#da263b' : '#dee0e2'};
  height: 28px;
  width: 320px;
  outline: none;
  margin: 5px 0 15px 0;
`

export const Option = styled.option<{ display: string }>`
  display: ${({ display }) => (display === '' ? 'none' : 'block')};
`
