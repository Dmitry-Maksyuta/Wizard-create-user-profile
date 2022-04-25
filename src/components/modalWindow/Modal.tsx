import React, { Component, Fragment } from 'react'
import { Background, Wrapper, Header, CloseContainer } from './styled'
import icon from '../../assets/images/cross.svg'
import content from '../../consts/text.json'

type Props = {
  toggle: any
  children: any
  title: string
}

class Modal extends Component<Props> {
  render() {
    const { children, toggle, title } = this.props
    return (
      <Fragment>
        <Background onClick={toggle} />
        <Wrapper>
          <Wrapper.Header>
            <Header.Title>{title}</Header.Title>
            <Header.CloseContainer>
              <CloseContainer.Line />
              <CloseContainer.Icon
                src={icon}
                alt={content.components.modalWindow.altIconClose}
                onClick={toggle}
              />
            </Header.CloseContainer>
          </Wrapper.Header>
          <Wrapper.Body>{children}</Wrapper.Body>
        </Wrapper>
      </Fragment>
    )
  }
}

export default Modal
