import styled from 'styled-components'

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
`

export const Wrapper: any = styled.div`
  width: 900px;
  height: 550px;
  max-height: calc(100vh - 100px);
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999999;
  border-radius: 4px;
  transform: translate(-50%, -50%);
`

export const Header: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: #363638;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: fit-content;
  padding: 0 40px;
  background: #424345;
  position: relative;
  color: #fff;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: calc(100% - 0.5px);
    border-width: 25px 0 25px 15px;
    border-style: solid;
    border-color: transparent #424345;
  }
`

export const CloseContainer: any = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`

export const Line = styled.div`
  width: 2px;
  height: 20px;
  background-color: #6e7478;
  margin-right: 5px;
`

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  filter: invert(48%) sepia(7%) saturate(373%) hue-rotate(161deg)
    brightness(91%) contrast(80%);
  padding: 10px;
  cursor: pointer;
`

export const Body = styled.div`
  height: calc(100% - 50px);
`

Wrapper.Header = Header
Wrapper.Body = Body

Header.Title = Title
Header.CloseContainer = CloseContainer

CloseContainer.Line = Line
CloseContainer.Icon = Icon
