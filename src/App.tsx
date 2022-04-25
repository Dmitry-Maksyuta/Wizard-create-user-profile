import React, { Component, ReactNode } from 'react'
import { Wrapper } from './styled'
import MainContainer from './containers/main/Main'

class App extends Component {
  render(): ReactNode {
    return (
      <Wrapper>
        <MainContainer />
      </Wrapper>
    )
  }
}

export default App
