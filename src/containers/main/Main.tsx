import React, { Component } from 'react'
import { Wrapper, Container, Title, Buttons, Button } from './styled'
import content from '../../consts/text.json'
import AddVM from '../../components/modalWindow/addVM'
import ViewVM from '../../components/modalWindow/viewVM'

interface State {
  visibilityAddMW: boolean
  visibilityListMW: boolean
}

class Main extends Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
      visibilityAddMW: false,
      visibilityListMW: false,
    }
  }

  changeVisibilityAddMW = () => {
    this.setState({
      ...this.state,
      visibilityAddMW: !this.state.visibilityAddMW,
    })
  }

  changeVisibilityListMW = () => {
    this.setState({
      ...this.state,
      visibilityListMW: !this.state.visibilityListMW,
    })
  }

  render() {
    const { visibilityAddMW, visibilityListMW } = this.state

    return (
      <Wrapper>
        <Container>
          <Title>{content.containers.main.title}</Title>
          <Buttons>
            <Button onClick={this.changeVisibilityAddMW}>
              {content.containers.main.btnAdd}
            </Button>
            <Button onClick={this.changeVisibilityListMW}>
              {content.containers.main.btnView}
            </Button>
          </Buttons>
        </Container>
        {visibilityAddMW && <AddVM toggle={this.changeVisibilityAddMW} />}
        {visibilityListMW && <ViewVM toggle={this.changeVisibilityListMW} />}
      </Wrapper>
    )
  }
}

export default Main
