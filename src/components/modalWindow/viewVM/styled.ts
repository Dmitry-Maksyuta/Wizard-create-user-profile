import styled from "styled-components";

export const Wrapper: any = styled.div`
  padding: 20px 0;
`

export const Title = styled.div`
  padding: 0 20px;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 10px;
`
export const Content: any = styled.div`
  width: 100%;
  height: 400px;
  border-bottom: 1px solid silver;
  border-radius: 4px;
`
export const Table: any = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  border: 1px solid silver;
  height: fit-content;
  max-height: 294px;
  padding: 20px;
  overflow-y: auto;
`

export const THead: any = styled.div`
  display: flex;
  
  & > div:nth-child(1) {
    width: 6%;
    border: none;
  }
  & > div:nth-child(2) {
    width: 25%;
  }
  & > div:nth-child(3) {
    width: 15%;
  }
  & > div:nth-child(4) {
    width: 15%;
  }
  & > div:nth-child(5) {
    width: 20.5%;
  }
  & > div:nth-child(6) {
    width: 20.5%;
  }
`

export const Item: any = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px 0 10px;
  border-left: 1px solid silver;
  color: ${({color}) => color === undefined ? 'initial' : color === 'true' ? 'green': 'red'}
`

export const Checkbox = styled.input`
  cursor: pointer;
`

export const TBody: any = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row: any = styled.div`
  display: flex;
  margin-top: 15px;
  padding-top: 5px;
  border-top: 1px solid silver;

  & > div:nth-child(1) {
    width: 6%;
    border: none;
  }
  & > div:nth-child(2) {
    width: 25%;
  }
  & > div:nth-child(3) {
    width: 15%;
  }
  & > div:nth-child(4) {
    width: 15%;
  }
  & > div:nth-child(5) {
    width: 20.5%;
  }
  & > div:nth-child(6) {
    width: 20.5%;
    cursor: pointer;
  }
`

export const BtnDelete = styled.div`
  margin: 10px 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  width: 90px;
  height: 28px;
  background-color: #25aafa;
  color: #fff;
`;

export const Close = styled.div`
  margin: 10px 20px 0 calc(100% - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  width: 90px;
  height: 28px;
  background-color: #25aafa;
  color: #fff;
`

Wrapper.Title = Title;
Wrapper.Content = Content;
Wrapper.Close = Close;

Content.Table = Table;
Content.BtnDelete = BtnDelete;

Table.THead = THead;
Table.TBody = TBody;

THead.Item = Item;

Item.Checkbox = Checkbox;

TBody.Row = Row;
