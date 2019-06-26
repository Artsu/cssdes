import React from 'react'
import styled from 'styled-components'
import Nintendo from './components/Nintendo'

const StyledApp = styled.div`
  #background: #2c2e28;
  min-height: 100vh;
`

const ResponsiveNintendoWrapper = styled.div`
  display: flex;
`

function App() {
  return (
    <StyledApp className="App">
      <ResponsiveNintendoWrapper>
        <Nintendo />
      </ResponsiveNintendoWrapper>
    </StyledApp>
  )
}

export default App
