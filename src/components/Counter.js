import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  state = {
    count: 0,
  }

  changeCounter = value => () => {
    this.setState({ count: this.state.count + value })
  }

  componentDidMount() {
    const { initialValue: count } = this.props
    this.setState({ count })
  }

  render() {
    const { count } = this.state

    return (
      <>
        <div className="counter-container">
          <div className="current-value">{count}</div>
          <div className="buttons-container">
            <button className="decrement" onClick={this.changeCounter(-1)} />
            <button className="increment" onClick={this.changeCounter(1)} />
          </div>
        </div>
      </>
    )
  }
}

Counter.propTypes = {
  initialValue: PropTypes.number.isRequired,
}

export default Counter
