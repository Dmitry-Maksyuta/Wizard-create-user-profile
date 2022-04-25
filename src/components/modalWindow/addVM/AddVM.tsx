import React, { Component } from 'react'
import Modal from '../Modal'
import content from '../../../consts/text.json'
import { Props, MyState, EnumKeysAsStrings } from './types'
import { Item, Menu, Wrapper, Buttons } from './styled'
import GeneralInfo from './steps/generalInfo/GeneralInfo'
import { Steps } from '../../../redux/registerVM/types'
import Destination from './steps/destination/Destination'
import Summary from './steps/summary/Summary'
import { checkApi, checkValue } from '../../../helpers/validations'

class AddVM extends Component<Props, MyState> {
  constructor(props: Props) {
    super(props)
    this.state = {
      api: '',
      login: '',
      password: '',
      processor: '',
      nameVM: '',
      repository: '',
      active: false,
      processorTypes: ['', 'intel', 'celeron', 'xeon'],
      validations: {
        api: null,
        login: null,
        password: null,
        processor: null,
        nameVM: null,
      },
    }
  }

  handleChangeProcessor = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement
    this.setState({
      ...this.state,
      processor: target.value,
    })
  }

  handleChangeRepository = (repo: string) => {
    this.setState({
      ...this.state,
      repository: repo,
    })
  }

  handleChangePowerVM = () => {
    this.setState({
      ...this.state,
      active: !this.state.active,
    })
  }

  onChange = (event: React.SyntheticEvent, key: string) => {
    const target = event.target as HTMLInputElement
    this.setState({
      ...this.state,
      [key]: target.value,
    })
  }

  onValidationFirstStep = () => {
    const { api, password, login, processor, nameVM, validations } = this.state
    const { setActiveStep, setTakenStep } = this.props
    const apiValidation = checkApi(api)
    const loginValidation = checkValue(login)
    const passwordValidation = checkValue(password)
    const processorValidation = checkValue(processor)
    const nameVMValidation = checkValue(nameVM)

    this.setState({
      ...this.state,
      validations: {
        ...validations,
        api: apiValidation,
        login: loginValidation,
        password: passwordValidation,
        processor: processorValidation,
        nameVM: nameVMValidation,
      },
    })

    const isValid =
      apiValidation &&
      loginValidation &&
      passwordValidation &&
      processorValidation &&
      nameVMValidation

    if (isValid) {
      setActiveStep(Steps.DESTINATION)
      setTakenStep({ key: 'GENERAL_INFO', taken: true })
    }
  }

  onValidationSecondStep = () => {
    const { repository } = this.state
    const { setActiveStep, setTakenStep } = this.props

    if (repository) {
      setActiveStep(Steps.SUMMARY)
      setTakenStep({ key: 'DESTINATION', taken: true })
    } else {
      alert('Select a repository')
    }
  }

  onCreateVM = () => {
    const { reset, registerVM, toggle } = this.props
    const {
      api,
      login,
      password,
      processor,
      nameVM,
      repository,
      active,
    } = this.state
    registerVM({
      api,
      login,
      password,
      processor,
      name: nameVM,
      repository,
      active,
      select: false,
    })
    reset()
    toggle()
  }

  onClickMenuItem = (taken: boolean, index: number) => {
    const { setActiveStep } = this.props
    if (taken) {
      setActiveStep(index)
    } else {
      this.onClickNextBnt()
    }
  }

  onClickPrevBtn = () => {
    const { activeStep, setActiveStep } = this.props
    setActiveStep(activeStep - 1)
  }

  onClickNextBnt = () => {
    const { activeStep } = this.props
    switch (activeStep) {
      case Steps.GENERAL_INFO:
        this.onValidationFirstStep()
        break
      case Steps.DESTINATION:
        this.onValidationSecondStep()
        break
      case Steps.SUMMARY:
        this.onCreateVM()
        break
      default:
        break
    }
  }

  render() {
    const { toggle, steps, activeStep } = this.props
    const {
      validations,
      processorTypes,
      processor,
      api,
      login,
      password,
      nameVM,
      repository,
      active,
    } = this.state

    const {
      handleChangeProcessor,
      onChange,
      handleChangeRepository,
      handleChangePowerVM,
      onClickNextBnt,
      onClickPrevBtn,
      onClickMenuItem,
    } = this
    const nextBtnText =
      activeStep === Steps.SUMMARY
        ? content.components.modalWindow.add.btnCreate
        : content.components.modalWindow.add.btnNext

    return (
      <Modal toggle={toggle} title={content.components.modalWindow.add.title}>
        <Wrapper>
          <Wrapper.Menu>
            {Object.keys(steps).map((key, index) => (
              <Menu.Item
                key={steps[key as EnumKeysAsStrings].name}
                index={index + 1}
                onClick={() =>
                  onClickMenuItem(steps[key as EnumKeysAsStrings].taken, index)
                }
              >
                <Item.Name>{steps[key as EnumKeysAsStrings].name}</Item.Name>
                <Item.Taken
                  taken={steps[key as EnumKeysAsStrings].taken}
                  active={(key as keyof typeof steps) === activeStep}
                >
                  {steps[key as EnumKeysAsStrings].taken ? '✓' : index + 1}
                </Item.Taken>
              </Menu.Item>
            ))}
          </Wrapper.Menu>
          <Wrapper.Content>
            {activeStep === Steps.GENERAL_INFO && (
              <GeneralInfo
                processors={processorTypes}
                processor={processor}
                api={api}
                login={login}
                password={password}
                nameVM={nameVM}
                handleChangeProcessor={handleChangeProcessor}
                onChange={onChange}
                validations={validations}
              />
            )}
            {activeStep === Steps.DESTINATION && (
              <Destination
                handleChange={handleChangeRepository}
                active={repository}
              />
            )}
            {activeStep === Steps.SUMMARY && (
              <Summary
                api={api}
                login={login}
                password={password.length}
                processor={processor}
                name={nameVM}
                stateVM={active}
                handleChangePowerVM={handleChangePowerVM}
              />
            )}
          </Wrapper.Content>
        </Wrapper>
        <Buttons>
          {activeStep > 0 && (
            <Buttons.Prev onClick={onClickPrevBtn}>
              {content.components.modalWindow.add.btnBack}
            </Buttons.Prev>
          )}
          <Buttons.Next onClick={onClickNextBnt}>{nextBtnText}</Buttons.Next>
        </Buttons>
      </Modal>
    )
  }
}

export default AddVM
