import React from 'react'
import styled from 'styled-components'
import NESTopMiddle from './NESTopMiddle'
import { breakpoints, NINTENDO_MOBILE_RATIO as NMR } from '../theme'

const NESTop = styled.div`
  display: flex;
  justify-content: center;
`

const nesTopCornerWidth = 115
const nesTopCornerHeight = 10
const NESTopLeft = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 ${nesTopCornerWidth}px ${nesTopCornerHeight}px;
  border-color: transparent transparent #c0bec7 transparent;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    border-width: 0 0 ${nesTopCornerWidth / NMR}px ${nesTopCornerHeight / NMR}px;
  }
`

const NESTopRight = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${nesTopCornerWidth}px 0 0 ${nesTopCornerHeight}px;
  border-color: transparent transparent transparent #c0bec7;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    border-width: ${nesTopCornerWidth / NMR}px 0 0 ${nesTopCornerHeight / NMR}px;
  }
`

const NESBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NESBottomBottom = styled.div`
  display: flex;
`

const NESBottomEnd = styled.div`
  display: flex;
  flex-direction: column;
`

const bottomPushHeight = 30
const BottomPush = styled.div`
  height: ${bottomPushHeight}px;
  background: #696b78;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    height: ${bottomPushHeight / NMR}px;
  }
`

const bottomCornerHeight = 40
const bottomCornerWidth = 100
const BottomLeftCorner = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 ${bottomCornerHeight}px ${bottomCornerWidth}px 0;
  border-color: transparent #696b78 transparent transparent;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    border-width: 0 ${bottomCornerHeight / NMR}px ${bottomCornerWidth / NMR}px 0;
  }
`

const nesBottomMiddleHeight = 130
const nesBottomMiddleWidth = 650
const NESBottomMiddle = styled.div`
  display: flex;
  background: #696b78;
  height: ${nesBottomMiddleHeight}px;
  width: ${nesBottomMiddleWidth}px;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    height: ${nesBottomMiddleHeight / NMR}px;
    width: ${nesBottomMiddleWidth / NMR}px;
  }
`

const controllerStripeWidth = 120
const controllerStripeHeight = 130
const controllerStripeMarginLeft = 235
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

const BottomRightCorner = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${bottomCornerWidth}px ${bottomCornerHeight}px 0 0;
  border-color: #696b78 transparent transparent transparent;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    border-width: ${bottomCornerWidth / NMR}px ${bottomCornerHeight / NMR}px 0 0;
  }
`

const ioContainerMarginLeft = 40
const ioContainerMarginHeight = 90
const ioContainerMarginWidth = 200
const IOContainer = styled.div`
  margin-left: ${ioContainerMarginLeft}px;
  height: ${ioContainerMarginHeight}px;
  width: ${ioContainerMarginWidth}px;
  border: 1px solid gray;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin-left: ${ioContainerMarginLeft / NMR}px;
    height: ${ioContainerMarginHeight / NMR}px;
    width: ${ioContainerMarginWidth / NMR}px;
  }
`

class Nintendo extends React.Component {
  state = {
    isOpen: true,
    cartIsDown: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        cartIsDown: true
      })
      setTimeout(() => {
        this.setState({
          isOpen: false
        })
      }, 800)
    }, 1000)
  }

  render() {
    return (
      <div className={this.props.className}>
        <NESTop>
          <NESTopLeft />
          <NESTopMiddle
            isOpen={this.state.isOpen}
            cartIsDown={this.state.cartIsDown}
          />
          <NESTopRight />
        </NESTop>
        <NESBottom>
          <NESBottomBottom>
            <NESBottomEnd>
              <BottomPush />
              <BottomLeftCorner />
            </NESBottomEnd>
            <NESBottomMiddle>
              <IOContainer>Power</IOContainer>
              <ControllerStripe />
            </NESBottomMiddle>
            <NESBottomEnd>
              <BottomPush />
              <BottomRightCorner />
            </NESBottomEnd>
          </NESBottomBottom>
        </NESBottom>
      </div>
    )
  }
}

const StyledNintendo = styled(Nintendo)`
  padding-top: 200px;
  filter: drop-shadow(0 0 5px grey);
  margin: auto;
`

export default StyledNintendo
