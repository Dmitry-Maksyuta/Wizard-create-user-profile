import React, { Component } from 'react'
import {
  Wrapper,
  Label,
  Input,
  Icon,
  Container,
  Select,
  Option,
} from './styled'
import content from '../../../../../consts/text.json'
import hide from '../../../../../assets/images/hide.svg'
import show from '../../../../../assets/images/show.svg'

interface Props {
  api: string
  login: string
  nameVM: string
  password: string
  processor: string
  validations: {
    api: null | boolean
    login: null | boolean
    password: null | boolean
    processor: null | boolean
    nameVM: null | boolean
  }
  processors: string[]
  handleChangeProcessor: (e: React.SyntheticEvent) => void
  onChange: (e: React.SyntheticEvent, key: string) => void
}

interface State {
  showPassword: boolean
}

class GeneralInfo extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      showPassword: false,
    }
  }

  onShowPassword = () =>
    this.setState({ showPassword: !this.state.showPassword })

  render() {
    const {
      onShowPassword,
      state: { showPassword },
    } = this
    const {
      processors,
      processor,
      handleChangeProcessor,
      onChange,
      api,
      login,
      password,
      nameVM,
      validations,
    } = this.props

    return (
      <Wrapper>
        <Label>{content.components.modalWindow.add.apiAddress}</Label>
        <Input
          type="text"
          value={api}
          onChange={(e) => onChange(e, 'api')}
          validation={validations.api}
        />

        <Label>{content.components.modalWindow.add.login}</Label>
        <Input
          type="text"
          value={login}
          onChange={(e) => onChange(e, 'login')}
          validation={validations.login}
        />

        <Label>{content.components.modalWindow.add.password}</Label>
        <Container>
          <Input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => onChange(e, 'password')}
            validation={validations.password}
          />
          <Icon
            src={showPassword ? show : hide}
            onClick={onShowPassword}
            alt="password"
          />
        </Container>

        <Label>{content.components.modalWindow.add.type}</Label>
        <Select
          value={processor}
          onChange={handleChangeProcessor}
          validation={validations.processor}
        >
          {processors.map((item, index) => (
            <Option key={`${item}-${index}`} value={item} display={item}>
              {item}
            </Option>
          ))}
        </Select>

        <Label>{content.components.modalWindow.add.name}</Label>
        <Input
          type="text"
          value={nameVM}
          onChange={(e) => onChange(e, 'nameVM')}
          validation={validations.nameVM}
        />
      </Wrapper>
    )
  }
}

export default GeneralInfo
