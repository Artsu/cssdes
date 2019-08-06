import React from 'react'
import styled from 'styled-components'
import { breakpoints, NINTENDO_MOBILE_RATIO as NMR } from '../theme'

const controllerStripeWidth = 120
const controllerStripeHeight = 130
const controllerStripeMarginLeft = 195
const ControllerStripe = styled.div`
  width: ${controllerStripeWidth}px;
  height: ${controllerStripeHeight}px;
  margin-left: ${controllerStripeMarginLeft}px;
  background: #2c2c2c;
  display: flex;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: ${controllerStripeWidth / NMR}px;
    height: ${controllerStripeHeight / NMR}px;
    margin-left: ${controllerStripeMarginLeft / NMR}px;
  }
`

const ControllerHalf = styled.div`
  flex-grow: 1;
  text-align: center;
`
const ControllerTitle = styled.div`
  font-family: NesController;
  color: #f9000f;
  font-size: 16px;
  font-weight: bold;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
`
const controllerSlotHeight = 70
const ControllerSlot = styled.div`
  height: ${controllerSlotHeight}px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    height: ${controllerSlotHeight / NMR}px;
  }
`
const controllerSlotInnerRimHeight = 56
const controllerSlotInnerRimWidth = 45
const controllerSlotRadius = 10
const ControllerSlotInnerRim = styled.div`
  border: 1px solid black;
  border-radius: ${controllerSlotRadius}px;
  height: ${controllerSlotInnerRimHeight}px;
  width: ${controllerSlotInnerRimWidth}px;
  position: relative;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    border-radius: ${controllerSlotRadius / NMR}px;
    height: ${controllerSlotInnerRimHeight / NMR}px;
    width: ${controllerSlotInnerRimWidth / NMR}px;
  }
`

const slotMargin = 7
const SlotForm = styled.div`
  position: absolute;
  left: ${slotMargin}px;
  top: ${slotMargin}px;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    left: ${slotMargin / NMR}px;
    top: ${slotMargin / NMR}px;
  }
`
const slotTriangleSize = 20
const SlotFormTopPart = styled.div`
  /**
   * How to make 3-corner-rounded triangle in CSS (SO)
   * http://stackoverflow.com/q/14446677/1397351
   */
  position: relative;
  background-color: black;
  text-align: left;

  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: inherit;
  }

  &,
  &:before,
  &:after {
    width: ${slotTriangleSize}px;
    height: ${slotTriangleSize}px;
    border-top-right-radius: 60%;

    @media only screen and (max-width: ${breakpoints.mobile}) {
      width: ${slotTriangleSize / NMR}px;
      height: ${slotTriangleSize / NMR}px;
    }
  }

  transform: rotate(-90deg) skewX(-30deg) scale(1, 0.866);
  &:before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
      translate(0, -50%);
  }
  &:after {
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
`
const slotBottomPositionLeft = 1.5
const slotBottomPositionTop = 14
const slotBottomBorderRadius = 10
const slotBottomWidth = 28.5
const slotBottomHeight = 30
const SlotFormBottomPart = styled.div`
  position: absolute;
  left: ${slotBottomPositionLeft}px;
  top: ${slotBottomPositionTop}px;
  background-color: black;
  border-radius: 0 0 ${slotBottomBorderRadius}px ${slotBottomBorderRadius}px;
  width: ${slotBottomWidth}px;
  height: ${slotBottomHeight}px;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    left: ${slotBottomPositionLeft / NMR}px;
    top: ${slotBottomPositionTop / NMR}px;
    border-radius: 0 0 ${slotBottomBorderRadius / NMR}px
      ${slotBottomBorderRadius / NMR}px;
    width: ${slotBottomWidth / NMR}px;
    height: ${slotBottomHeight / NMR}px;
  }
`

const slotPinSize = 8
const slotPinLeftPosition = 6
const slotPinRightPosition = 16
const slotPinRow1Top = 4
const slotPinRow2Top = 13
const slotPinRow3Top = 22
const slotPinRow4Top = 31
const SlotPins = styled(({ className }) => {
  return (
    <div className={className}>
      <span className="pin left-pin pin1" />
      <span className="pin left-pin pin2" />
      <span className="pin left-pin pin3" />
      <span className="pin left-pin pin4" />
      <span className="pin right-pin pin5" />
      <span className="pin right-pin pin6" />
      <span className="pin right-pin pin7" />
    </div>
  )
})`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  & .pin {
    position: absolute;
    width: ${slotPinSize}px;
    height: ${slotPinSize}px;
    border-radius: 10px;
    background: #3d3d3d;

    @media only screen and (max-width: ${breakpoints.mobile}) {
      width: ${slotPinSize / NMR}px;
      height: ${slotPinSize / NMR}px;
    }
  }

  & .left-pin {
    left: ${slotPinLeftPosition}px;
  }
  & .right-pin {
    left: ${slotPinRightPosition}px;
  }

  & .pin1 {
    top: ${slotPinRow1Top}px;
  }
  & .pin2 {
    top: ${slotPinRow2Top}px;
  }
  & .pin3 {
    top: ${slotPinRow3Top}px;
  }
  & .pin4 {
    top: ${slotPinRow4Top}px;
  }
  & .pin5 {
    top: ${slotPinRow2Top}px;
  }
  & .pin6 {
    top: ${slotPinRow3Top}px;
  }
  & .pin7 {
    top: ${slotPinRow4Top}px;
  }

  @media only screen and (max-width: ${breakpoints.mobile}) {
    & .left-pin {
      left: ${slotPinLeftPosition / NMR}px;
    }
    & .right-pin {
      left: ${slotPinRightPosition / NMR}px;
    }

    & .pin1 {
      top: ${slotPinRow1Top / NMR}px;
    }
    & .pin2 {
      top: ${slotPinRow2Top / NMR}px;
    }
    & .pin3 {
      top: ${slotPinRow3Top / NMR}px;
    }
    & .pin4 {
      top: ${slotPinRow4Top / NMR}px;
    }
    & .pin5 {
      top: ${slotPinRow2Top / NMR}px;
    }
    & .pin6 {
      top: ${slotPinRow3Top / NMR}px;
    }
    & .pin7 {
      top: ${slotPinRow4Top / NMR}px;
    }
  }
`

export default () => {
  return (
    <ControllerStripe>
      <ControllerHalf>
        <ControllerTitle>1</ControllerTitle>
        <ControllerSlot>
          <ControllerSlotInnerRim>
            <SlotForm>
              <SlotFormTopPart />
              <SlotFormBottomPart />
              <SlotPins />
            </SlotForm>
          </ControllerSlotInnerRim>
        </ControllerSlot>
      </ControllerHalf>
      <ControllerHalf>
        <ControllerTitle>2</ControllerTitle>
        <ControllerSlot>
          <ControllerSlotInnerRim>
            <SlotForm>
              <SlotFormTopPart />
              <SlotFormBottomPart />
              <SlotPins />
            </SlotForm>
          </ControllerSlotInnerRim>
        </ControllerSlot>
      </ControllerHalf>
    </ControllerStripe>
  )
}
