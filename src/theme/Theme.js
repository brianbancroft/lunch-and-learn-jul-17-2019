import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#3DB35B',
    seconday: '#FF898F',
    black: '#222',
    white: '#fff',
  },
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans- serif`,
  text: {
    fontSize: '12px',
  },
  h1: {
    fontSize: '24px',
  },
}

export default <ThemeProvider theme={theme} />
