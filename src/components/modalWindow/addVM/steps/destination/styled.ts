import styled from 'styled-components'

export const Wrapper: any = styled.div``

export const Title = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
`

export const Container: any = styled.div`
  width: 350px;
  height: 250px;
  border: 1px solid #c6c8c9;

  & div:nth-child(even) {
    background-color: #c6c8c933;
  }
`

export const Cluster: any = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`

export const Icon = styled.span`
  margin-right: 7px;
  color: #25aafa;
  font-weight: 600;
`

export const Repo: any = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 30px;
  cursor: pointer;
`

export const CheckBox = styled.input``

Wrapper.Title = Title
Wrapper.Container = Container

Container.Cluster = Cluster
Container.Repo = Repo

Cluster.Icon = Icon

Repo.CheckBox = CheckBox
