import styled from 'styled-components'

interface ItemProps {
  index: number
}

interface TakenProps {
  active: boolean
  taken: boolean
}

export const Wrapper: any = styled.div`
  display: flex;
  margin-top: 60px;
  border-top: 1px solid #c6c1c147;
  border-bottom: 1px solid #c6c1c147;
  height: 360px;
`

export const Menu: any = styled.div`
  height: 100%;
  border-right: 1px solid #c6c1c147;
  max-width: 25%;
  width: 100%;
  position: relative;
`

export const Item: any = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  position: absolute;
  top: ${(props) => props.index * 30}px;
  right: -10px;
  cursor: pointer;
`

export const Name = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-right: 15px;
  width: 80px;
  text-align: right;
`

export const Taken = styled.div<TakenProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 1px solid
    ${({ taken, active }) => (active || taken ? '#25aafa' : '#c6c1c147')};
  font-size: 9px;
  color: ${({ taken, active }) =>
    active ? '#fff' : taken ? '#25aafa' : 'rgba(0,0,0,0.35)'};
  background-color: ${({ active }) => (active ? '#25aafa' : '#fff')};
`

export const Content = styled.div`
  padding: 40px 50px;
`

export const Buttons: any = styled.div`
  display: flex;
  padding: 20px 20px;
  justify-content: flex-end;
`

export const Prev = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 14px;
  width: 70px;
  height: 30px;
  border: 1px solid #c6c8c9;
  margin-right: 15px;
  cursor: pointer;
  border-radius: 3px;
`

export const Next = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  width: 70px;
  height: 30px;
  border: 1px solid #25aafa;
  background-color: #25aafa;
  cursor: pointer;
  border-radius: 3px;
`

Wrapper.Menu = Menu
Wrapper.Content = Content

Menu.Item = Item
Item.Name = Name
Item.Taken = Taken

Buttons.Prev = Prev
Buttons.Next = Next
