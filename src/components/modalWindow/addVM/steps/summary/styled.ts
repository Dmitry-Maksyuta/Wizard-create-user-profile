import styled from 'styled-components'

export const Wrapper: any = styled.div``

export const Title: any = styled.div`
  font-size: 13px;
  margin-bottom: 30px;
`

export const Content: any = styled.div`
  width: 450px;
  height: fit-content;
  border-bottom: 1px solid grey;
  padding-bottom: 20px;
  margin-bottom: 10px;
  padding-left: 40px;
`

export const Info: any = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  margin-bottom: 5px;
`

export const Name: any = styled.div`
  width: 155px;
  text-align: right;
  margin-right: 5px;
  color: #00000061;
`

export const Value: any = styled.div``

export const PowerVM: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 13px;
  cursor: pointer;
`

export const Checkbox: any = styled.input``

Wrapper.Title = Title
Wrapper.Content = Content
Wrapper.PowerVM = PowerVM

Content.Info = Info

Info.Name = Name
Info.Value = Value

PowerVM.Checkbox = Checkbox
