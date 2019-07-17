import React from 'react'
import { Counter, BoxOne } from '.'
import DataContext from '../context'

class Layout extends React.Component {
  state = {
    count: 0,
  }

  updateCounter = count => {
    this.setState({ count })
  }

  render() {
    return (
      <DataContext.Provider
        value={{ initialValue: 0, changeValueFn: this.updateCounter }}
      >
        <header>
          <h1>Snack and Learn - July 17</h1>
        </header>
        <main>
          <Counter initialValue={0} />
          <Counter initialValue={3} />
          <Counter initialValue={-6} />
          <Counter initialValue={12} />
          <hr />
          <h2>Props Drilling Example</h2>
          <BoxOne />
          <hr />
          <p>The value of the last counter box is {this.state.count}! </p>
        </main>
      </DataContext.Provider>
    )
  }
}

export default Layout
