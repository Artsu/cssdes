import React from 'react'
import styled from 'styled-components'
import { breakpoints, NINTENDO_MOBILE_RATIO as NMR } from '../theme'

const bottomMiddleHeight = 130
const bottomMiddleWidth = 650
const BottomMiddle = styled.div`
  display: flex;
  background: #696b78;
  height: ${bottomMiddleHeight}px;
  width: ${bottomMiddleWidth}px;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    height: ${bottomMiddleHeight / NMR}px;
    width: ${bottomMiddleWidth / NMR}px;
  }
`

const controllerStripeWidth = 120
const controllerStripeHeight = 130
const controllerStripeMarginLeft = 195
const ControllerStripe = styled.div`
  width: ${controllerStripeWidth}px;
  height: ${controllerStripeHeight}px;
  margin-left: ${controllerStripeMarginLeft}px;
  background: #2c2c2c;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: ${controllerStripeWidth / NMR}px;
    height: ${controllerStripeHeight / NMR}px;
    margin-left: ${controllerStripeMarginLeft / NMR}px;
  }
`
const ioContainerMarginLeft = 40
const ioContainerMarginHeight = 90
const ioContainerPadding = {
  top: 50,
  horizontal: 20,
  bottom: 20
}
const ioContainerPaddingVerticalTotal =
  ioContainerPadding.top + ioContainerPadding.bottom
const ioContainerMarginWidth = 200
const IOContainer = styled.div`
  margin-left: ${ioContainerMarginLeft}px;
  padding: ${ioContainerPadding.top}px ${ioContainerPadding.horizontal}px
    ${ioContainerPadding.bottom}px;
  height: ${ioContainerMarginHeight - ioContainerPaddingVerticalTotal}px;
  width: ${ioContainerMarginWidth}px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin-left: ${ioContainerMarginLeft / NMR}px;
    padding: ${ioContainerPadding.top / NMR}px
      ${ioContainerPadding.horizontal / NMR}px
      ${ioContainerPadding.bottom / NMR}px;
    height: ${ioContainerMarginHeight / NMR -
      ioContainerPaddingVerticalTotal / NMR}px;
    width: ${ioContainerMarginWidth / NMR}px;
  }
`

const powerButtonDimensions = 15
const PowerIndicator = styled.div`
  width: ${powerButtonDimensions}px;
  height: ${powerButtonDimensions}px;
  background: red;
  border: 1px solid gray;
  border-style: inset;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: ${powerButtonDimensions / NMR}px;
    height: ${powerButtonDimensions / NMR}px;
  }
`
const frontButtonWidth = 60
const frontButtonHeight = 20
const frontButtonPadding = 5
const FrontButton = styled.div`
  font-family: NesController;
  color: #f9000f;
  font-size: 14px;
  width: ${frontButtonWidth}px;
  height: ${frontButtonHeight}px;
  padding: ${frontButtonPadding}px;
  border: 3px solid #848695;
  border-style: groove;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  cursor: pointer;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: ${frontButtonWidth / NMR}px;
    height: ${frontButtonHeight / NMR}px;
    padding: ${frontButtonPadding / NMR}px;
    font-size: 10px;
  }

  :active {
    background: #4d4e58;
    border: 2px solid #848695;
    border-style: inset;
    margin: 0 1px;
  }

  ${props =>
    props.isActive &&
    `
    background: #4d4e58;
    border: 2px solid #848695;
    border-style: inset;
    margin: 0 1px;
  `}
`

export default () => {
  return (
    <BottomMiddle>
      <IOContainer>
        <PowerIndicator />
        <FrontButton>Power</FrontButton>
        <FrontButton>Reset</FrontButton>
      </IOContainer>
      <ControllerStripe />
    </BottomMiddle>
  )
}
