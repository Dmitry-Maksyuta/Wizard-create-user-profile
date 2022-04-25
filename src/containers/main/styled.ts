import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom left, #292524, #374a51);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 400px;
  background-color: #373739;
  border-radius: 4px;
`

export const Title = styled.h1`
  margin: 50px 0 70px;
  font-size: 32px;
  font-weight: 400;
  color: #fff;
`

export const Buttons = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 135px;
  background-color: #4e4e4e;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #484747;
    transition: all 300ms linear;
  }
`
