import React from 'react'
import styled from 'styled-components'
import Cartridge from './Cartridge'
import { breakpoints, NINTENDO_MOBILE_RATIO as NMR } from '../theme'

const topWidthBase = 710
const topHeightBase = 115
const NESTopMiddle = styled.div`
  display: flex;
  background: #c0bec7;
  height: ${topHeightBase}px;
  width: ${topWidthBase}px;
  position: relative;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    height: ${topHeightBase / NMR}px;
    width: ${topWidthBase / NMR}px;
  }
`

const cartLoaderInsideWidth = 415
const cartLoaderInsideHeight = 90
const cartLoaderInsideMarginLeft = 90
const CartLoaderInside = styled.div`
  background: #c0bec7;
  margin-left: ${cartLoaderInsideMarginLeft}px;
  width: ${cartLoaderInsideWidth}px;
  height: ${cartLoaderInsideHeight}px;
  border: 1px solid gray;
  display: flex;
  position: relative;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: ${cartLoaderInsideWidth / NMR}px;
    height: ${cartLoaderInsideHeight / NMR}px;
    margin-left: ${cartLoaderInsideMarginLeft / NMR}px;
  }
`

const cartLoaderMargin = {
  top: 5,
  leftRight: 20,
  bottom: 10
}
const cartLoaderMarginVertical = cartLoaderMargin.top + cartLoaderMargin.bottom
const CartLoader = styled.div`
  background: #2c2c2c;
  margin: ${cartLoaderMargin.top}px ${cartLoaderMargin.leftRight}px
    ${cartLoaderMargin.bottom}px;
  width: 100%;
  height: calc(100% - ${cartLoaderMarginVertical}px);
  overflow: hidden;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin: ${cartLoaderMargin.top / NMR}px
      ${cartLoaderMargin.leftRight / NMR}px ${cartLoaderMargin.bottom / NMR}px;
    height: calc(100% - ${cartLoaderMarginVertical / NMR}px);
  }
`

const hatchMarginLeft = 90
const hatchWidth = 415
const hatchHeight = 90
const hatchFrontTranslateY = -120
const HatchFront = styled.div`
  background: #c0bec7;
  position: absolute;
  margin-left: ${hatchMarginLeft}px;
  width: ${hatchWidth}px;
  height: ${hatchHeight}px;
  border: 1px solid gray;
  transition: transform 0.5s linear;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin-left: ${hatchMarginLeft / NMR}px;
    width: ${hatchWidth / NMR}px;
    height: ${hatchHeight / NMR}px;
  }

  ${props =>
    props.isOpen &&
    `
    transform: translate3d(0, ${hatchFrontTranslateY}px, 0) rotate3d(1, 0, 0, 80deg);
    
    
    @media only screen and (max-width: ${breakpoints.mobile}) {
      transform: translate3d(0, ${hatchFrontTranslateY /
        2}px, 0) rotate3d(1, 0, 0, 80deg);
    }
  `}
`

const hatchTopOpenHeight = 70
const HatchTop = styled.div`
  background: #9f9da6;
  position: absolute;
  margin-left: ${hatchMarginLeft}px;
  width: ${hatchWidth}px;
  height: ${hatchHeight}px;
  top: ${-hatchTopOpenHeight}px;
  height: ${hatchTopOpenHeight}px;
  border: 1px solid gray;
  transform: rotate3d(1, 0, 0, 90deg);
  transition: transform 0.5s;
  transform-origin: 0% 100%;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin-left: ${hatchMarginLeft / NMR}px;
    width: ${hatchWidth / NMR}px;
    top: ${-hatchTopOpenHeight / NMR}px;
    height: ${hatchTopOpenHeight / NMR}px;
  }

  ${props =>
    props.isOpen &&
    `
    transition: transform 0.5s 0.15s;
    transform: rotate3d(1, 0, 0, 0deg);
  `}
`

const grayStripeWidth = 120
const grayStripeHeight = 115
const GrayStripe = styled.div`
  width: ${grayStripeWidth}px;
  height: ${grayStripeHeight}px;
  background: #2c2c2c;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: ${grayStripeWidth / NMR}px;
    height: ${grayStripeHeight / NMR}px;
  }
`

const logoMarginTop = 30
const logoMarginleft = 15
const Logo = styled.div`
  font-family: Pretendo;
  margin-top: ${logoMarginTop}px;
  margin-left: ${logoMarginleft}px;
  color: #f9000f;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin-top: ${logoMarginTop / NMR}px;
    margin-left: ${logoMarginleft / NMR}px;
    font-size: 10px;
  }
`

const SubLogo = styled.div`
  font-family: NesController;
  margin-left: ${logoMarginleft}px;
  color: #f9000f;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin-left: ${logoMarginleft / NMR}px;
    font-size: 10px;
  }
`

export default props => {
  return (
    <NESTopMiddle>
      <CartLoaderInside>
        <CartLoader>
          <Cartridge isDown={props.cartIsDown} />
        </CartLoader>
      </CartLoaderInside>
      <HatchTop isOpen={props.isOpen} />
      <HatchFront isOpen={props.isOpen}>
        <Logo>Dindendo</Logo>
        <SubLogo>Enterntainment System</SubLogo>
      </HatchFront>
      <GrayStripe />
    </NESTopMiddle>
  )
}
