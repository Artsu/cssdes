import React, { Component } from 'react'
import styled from 'styled-components'
import { breakpoints, NINTENDO_MOBILE_RATIO as NMR } from '../theme'

const cartMargin = 2
const cartHeight = 50
const cartAnimationBottom = 60
const cartAnimationStop = 40
const Cart = styled.div`
  display: flex;
  background: #696b78;
  border-radius: 4px;
  flex-grow: 1;
  margin: ${cartMargin}px;
  height: ${cartHeight}px;
  position: relative;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin: ${cartMargin / NMR}px;
    height: ${cartHeight / NMR}px;
  }

  @keyframes slideIn {
    from {
      transform: translate3d(0, 0, 0);
    }
    70% {
      transform: translate3d(0, ${cartAnimationBottom}px, 0);
    }
    to {
      transform: translate3d(0, ${cartAnimationStop}px, 0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translate3d(0, ${cartAnimationStop}px, 0);
    }
    30% {
      transform: translate3d(0, ${cartAnimationBottom}px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideInMobile {
    from {
      transform: translate3d(0, 0, 0);
    }
    70% {
      transform: translate3d(0, ${cartAnimationBottom / NMR}px, 0);
    }
    to {
      transform: translate3d(0, ${cartAnimationStop / NMR}px, 0);
    }
  }

  @keyframes slideOutMobile {
    from {
      transform: translate3d(0, ${cartAnimationStop / NMR}px, 0);
    }
    30% {
      transform: translate3d(0, ${cartAnimationBottom / NMR}px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  ${props =>
    !props.initialRender &&
    props.isDown &&
    `
      animation: slideIn 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 1;
      animation-fill-mode: forwards;
             
      @media only screen and (max-width: ${breakpoints.mobile}) {
        animation: slideInMobile 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 1;
        animation-fill-mode: forwards;
      }  
  `}

  ${props =>
    !props.initialRender &&
    !props.isDown &&
    `
      animation: slideOut 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 1;
      animation-fill-mode: forwards;
                   
      @media only screen and (max-width: ${breakpoints.mobile}) {
        animation: slideOutMobile 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 1;
        animation-fill-mode: forwards;
      }  
  `}
`

const clipPartWidth = 20
const clipTopHeight = 17
const clipMargin = {
  leftRight: 15,
  bottom: 3
}
const Clip = styled(props => {
  return (
    <div className={props.className}>
      <div className="clip-top">
        <div className="clip-press-point" />
      </div>
      <div className="clip-bottom" />
    </div>
  )
})`
  display: flex;
  flex-direction: column;
  position: relative;

  & .clip-top {
    background: #575964;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
    width: ${clipPartWidth}px;
    height: ${clipTopHeight}px;
    margin: 0 ${clipMargin.leftRight}px ${clipMargin.bottom}px;
    position: relative;

    @media only screen and (max-width: ${breakpoints.mobile}) {
      width: ${clipPartWidth / NMR}px;
      height: ${clipTopHeight / NMR}px;
      margin: 0 ${clipMargin.leftRight / NMR}px ${clipMargin.bottom / NMR}px;
    }
  }

  & .clip-bottom {
    background: #575964;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    position: absolute;
    width: ${clipPartWidth}px;
    height: 50%;
    bottom: 0;
    margin: 0 ${clipMargin.leftRight}px;

    @media only screen and (max-width: ${breakpoints.mobile}) {
      width: ${clipPartWidth / NMR}px;
      margin: 0 ${clipMargin.leftRight / NMR}px;
    }
  }

  & .clip-press-point {
    background: #888a98;
    position: absolute;
    bottom: 1px;
    left: 1px;
    right: 1px;
    height: 50%;
  }
`

const thinPartWidth = 80
const thinPartMargin = {
  leftRight: 15,
  bottom: 3
}
const ThinPart = styled(props => {
  return (
    <div className={props.className}>
      <div className="thin-top" />
      <div className="thin-bottom" />
    </div>
  )
})`
  display: flex;
  flex-direction: column;
  position: relative;

  & .thin-top {
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
    background: #575964;
    width: ${thinPartWidth}px;
    height: 30%;
    margin: 0 ${thinPartMargin.leftRight}px ${thinPartMargin.bottom}px;
    position: relative;

    @media only screen and (max-width: ${breakpoints.mobile}) {
      width: ${thinPartWidth / NMR}px;
      margin: 0 ${thinPartMargin.leftRight / NMR}px
        ${thinPartMargin.bottom / NMR}px;
    }
  }

  & .thin-bottom {
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    border-top: 1px solid gray;
    background: #575964;
    position: absolute;
    width: ${thinPartWidth}px;
    height: 35%;
    bottom: 0;
    margin: 0 ${thinPartMargin.leftRight}px;

    @media only screen and (max-width: ${breakpoints.mobile}) {
      width: ${thinPartWidth / NMR}px;
      margin: 0 ${thinPartMargin.leftRight / NMR}px;
    }
  }
`

const gameTagHeight = 15
const gameTagWidth = 160
const gameTagPadding = {
  vertical: 2,
  horizontal: 5
}
const GameTag = styled.div`
  font-family: NesController;
  background: #2a2a2a;
  color: white;
  height: ${gameTagHeight}px;
  width: ${gameTagWidth}px;
  padding: ${gameTagPadding.vertical}px ${gameTagPadding.horizontal}px;
  border: 1px solid #616271;
  border-radius: 0 0 5px 5px;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    height: ${gameTagHeight / NMR}px;
    width: ${gameTagWidth / NMR}px;
    padding: ${gameTagPadding.vertical / NMR}px
      ${gameTagPadding.horizontal / NMR}px;
    font-size: 7px;
  }
`

const SplitLine = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  height: 1px;
  background: gray;
`

const bottomSlopeHeight = 8
const BottomSlope = styled.div`
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: ${bottomSlopeHeight}px;
  background: #353740;
  opacity: 0.6;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    height: ${bottomSlopeHeight / NMR}px;
  }
`

export default class Cartridge extends Component {
  state = {
    initialRender: true
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.isDown !== nextProps.isDown) {
      this.setState({
        initialRender: false
      })
    }
  }

  render() {
    return (
      <Cart isDown={this.props.isDown} initialRender={this.state.initialRender}>
        <Clip />
        <SplitLine />
        <SplitLine />
        <GameTag>Super Wunder Bros</GameTag>
        <ThinPart />
        <Clip />
        <BottomSlope />
      </Cart>
    )
  }
}
