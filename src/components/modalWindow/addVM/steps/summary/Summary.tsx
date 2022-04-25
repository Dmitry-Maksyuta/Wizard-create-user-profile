import React, { Component } from 'react'
import { Wrapper, Content, PowerVM, Info } from './styled'
import content from '../../../../../consts/text.json'

interface Props {
  api: string
  login: string
  password: number
  processor: string
  name: string
  stateVM: boolean
  handleChangePowerVM: () => void
}

class Summary extends Component<Props> {
  render() {
    const {
      api,
      login,
      password,
      processor,
      name,
      stateVM,
      handleChangePowerVM,
    } = this.props
    return (
      <Wrapper>
        <Wrapper.Title>
          {content.components.modalWindow.add.summary}
        </Wrapper.Title>
        <Wrapper.Content>
          <Content.Info>
            <Info.Name>
              {content.components.modalWindow.add.apiAddress}:
            </Info.Name>
            <Info.Value>{api}</Info.Value>
          </Content.Info>
          <Content.Info>
            <Info.Name>
              {content.components.modalWindow.add.login}:
            </Info.Name>
            <Info.Value>{login}</Info.Value>
          </Content.Info>
          <Content.Info>
            <Info.Name>
              {content.components.modalWindow.add.password}:
            </Info.Name>
            <Info.Value>{'*'.repeat(password)}</Info.Value>
          </Content.Info>
          <Content.Info>
            <Info.Name>
              {content.components.modalWindow.add.type}:
            </Info.Name>
            <Info.Value>{processor}</Info.Value>
          </Content.Info>
          <Content.Info>
            <Info.Name>
              {content.components.modalWindow.add.name}:
            </Info.Name>
            <Info.Value>{name}</Info.Value>
          </Content.Info>
        </Wrapper.Content>
        <Wrapper.PowerVM onClick={handleChangePowerVM}>
          <PowerVM.Checkbox type="checkbox" checked={stateVM} onChange={() => {}} />
            {content.components.modalWindow.add.summaryCheckbox}
        </Wrapper.PowerVM>
      </Wrapper>
    )
  }
}

export default Summary
