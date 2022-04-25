import React, { Component } from 'react'
import { Wrapper, Container, Cluster, Repo } from './styled'
import content from '../../../../../consts/text.json'
import data from '../../../../../consts/data.json'

interface Props {
  handleChange: (s: string) => void
  active: string
}

interface State {
  activeCluster: null | string
}

class Destination extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      activeCluster: null,
    }

    this.onClickCluster = this.onClickCluster.bind(this)
  }

  onClickCluster(value: string): void {
    this.setState({
      activeCluster: value === this.state.activeCluster ? null : value,
    })
  }

  render() {
    const { handleChange, active } = this.props
    const { activeCluster } = this.state
    const { onClickCluster } = this

    const title = content.components.modalWindow.add.destinationTitle

    return (
      <Wrapper>
        <Wrapper.Title>{title}</Wrapper.Title>
        <Wrapper.Container>
          {data.map((item) => (
            <React.Fragment key={item.value}>
              <Container.Cluster
                key={item.value}
                onClick={() => onClickCluster(item.value)}
              >
                <Cluster.Icon>
                  {activeCluster === item.value ? '-' : '+'}
                </Cluster.Icon>
                {item.label}
              </Container.Cluster>
              {activeCluster === item.value && (
                <React.Fragment>
                  {item.children.map((item) => (
                    <Container.Repo
                      key={item.value}
                      onClick={() => handleChange(item.value)}
                    >
                      <Repo.CheckBox
                        type="checkbox"
                        checked={active === item.value}
                        onChange={() => {}}
                      />
                      {item.label}
                    </Container.Repo>
                  ))}
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
        </Wrapper.Container>
      </Wrapper>
    )
  }
}

export default Destination
