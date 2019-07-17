import React from 'react'
import { Counter, BoxOne } from '.'

class Layout extends React.Component {
  state = {
    count: 0,
  }

  updateCounter = count => {
    this.setState({ count })
  }

  render() {
    return (
      <>
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
          <BoxOne initialValue={0} changeValueFn={this.updateCounter} />
          <hr />
          <p>The value of the last counter box is {this.state.count}! </p>
        </main>
      </>
    )
  }
}

export default Layout
