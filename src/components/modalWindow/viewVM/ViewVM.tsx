import React, { Component } from 'react'
import { Props, MyState } from './types'
import content from '../../../consts/text.json'
import Modal from '../Modal'
import { Wrapper, Content, Table, THead, Item, TBody } from './styled'

class ViewVM extends Component<Props, MyState> {
  constructor(props: Props) {
    super(props)
    this.state = {
      allSelected: false,
      visibilityBtn: false,
    }
  }

  changeState = (allSelected: boolean, visibilityBtn: boolean) => {
    this.setState({ allSelected, visibilityBtn })
  }

  componentDidUpdate = (prevState: Props) => {
    if (prevState.list !== this.props.list) {
      const { list } = this.props
      const selected = list.filter((item) => item.select).length
      const isAllSelect = list.length === selected && list.length !== 0
      this.changeState(isAllSelect, Boolean(selected))
    }
  }

  componentWillUnmount() {
    const { selectedAll } = this.props
    selectedAll(false)
  }

  render() {
    const {
      toggle,
      list,
      changeActive,
      changeSelect,
      selectedAll,
      deleteVM,
    } = this.props
    const { allSelected, visibilityBtn } = this.state
    const title = content.components.modalWindow.view.subTitle
    const { tHead } = content.components.modalWindow.view
    const deleteBtn = content.components.modalWindow.view.delete
    const closeBtn = content.components.modalWindow.view.close

    return (
      <Modal toggle={toggle} title={content.components.modalWindow.view.title}>
        <Wrapper>
          <Wrapper.Title>{title}</Wrapper.Title>
          <Wrapper.Content>
            <Content.Table>
              <Table.THead>
                {Object.values(tHead).map((value) => {
                  if (value === 'select')
                    return (
                      <THead.Item key={value}>
                        <Item.Checkbox
                          type="checkbox"
                          checked={allSelected}
                          onChange={() => selectedAll(true)}
                        />
                      </THead.Item>
                    )
                  return <THead.Item key={value}>{value}</THead.Item>
                })}
              </Table.THead>
              <Table.TBody>
                {list.map((item, index) => (
                  <TBody.Row key={item.name + index}>
                    {Object.keys(tHead).map((value) => {
                      if (value === 'select')
                        return (
                          <THead.Item key={value}>
                            <Item.Checkbox
                              type="checkbox"
                              checked={item[value]}
                              onChange={() => changeSelect(index)}
                            />
                          </THead.Item>
                        )
                      if (value === 'active')
                        return (
                          <THead.Item
                            key={value}
                            color={item[value].toString()}
                            onClick={() => changeActive(index)}
                          >
                            {item[value] ? 'ON' : 'OFF'}
                          </THead.Item>
                        )
                      // @ts-ignore
                      return <THead.Item key={value}>{item[value]}</THead.Item>
                    })}
                  </TBody.Row>
                ))}
              </Table.TBody>
            </Content.Table>
            {visibilityBtn && (
              <Content.BtnDelete onClick={deleteVM}>
                {deleteBtn}
              </Content.BtnDelete>
            )}
          </Wrapper.Content>
          <Wrapper.Close onClick={toggle}>{closeBtn}</Wrapper.Close>
        </Wrapper>
      </Modal>
    )
  }
}

export default ViewVM
