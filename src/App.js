import React, { Component } from 'react'
import styled from 'styled-components'
import Nintendo from './components/Nintendo'

const StyledApp = styled.div`
  #background: #2c2e28;
  min-height: 100vh;
`

const ResponsiveNintendoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  width: 200px;
  margin-top: 50px;
`

class App extends Component {
  state = {
    isOpen: true,
    cartIsDown: false,
    buttonDisabled: true
  }

  // Quick and dirty timeouts for playing around with open/close
  componentDidMount() {
    setTimeout(() => {
      this.toggleNes()
    }, 1000)
  }

  toggleNes = () => {
    if (this.state.isOpen) {
      this.closeNes()
    } else {
      this.openNes()
    }
  }

  openNes = () => {
    this.setState({
      buttonDisabled: true,
      isOpen: true
    })
    setTimeout(() => {
      this.setState({
        cartIsDown: false
      })
      setTimeout(() => {
        this.setState({
          buttonDisabled: false
        })
      }, 800)
    }, 1000)
  }

  closeNes = () => {
    this.setState({
      buttonDisabled: true,
      cartIsDown: true
    })
    setTimeout(() => {
      this.setState({
        isOpen: false
      })
      setTimeout(() => {
        this.setState({
          buttonDisabled: false
        })
      }, 800)
    }, 800)
  }

  render() {
    return (
      <StyledApp className="App">
        <ResponsiveNintendoWrapper>
          <Button disabled={this.state.buttonDisabled} onClick={this.toggleNes}>
            {this.state.cartIsDown || !this.state.isOpen ? 'Open' : 'Close'}
          </Button>
          <Nintendo
            isOpen={this.state.isOpen}
            cartIsDown={this.state.cartIsDown}
          />
        </ResponsiveNintendoWrapper>
      </StyledApp>
    )
  }
}

export default App
