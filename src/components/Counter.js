import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  state = {
    count: 0,
  }

  changeCounter = ({ value, changeValueFn }) => async () => {
    await this.setState({ count: this.state.count + value })
    changeValueFn(this.state.count)
  }

  componentDidMount() {
    const { initialValue: count } = this.props
    this.setState({ count })
  }

  render() {
    const { count } = this.state
    const { changeValueFn } = this.props

    return (
      <>
        <div className="counter-container">
          <div className="current-value">{count}</div>
          <div className="buttons-container">
            <button
              className="decrement"
              onClick={this.changeCounter({ value: -1, changeValueFn })}
            />
            <button
              className="increment"
              onClick={this.changeCounter({ value: 1, changeValueFn })}
            />
          </div>
        </div>
      </>
    )
  }
}

Counter.propTypes = {
  initialValue: PropTypes.number.isRequired,
  changeValueFn: PropTypes.func,
}

Counter.defaultProps = {
  changeValueFn: () => {},
}

export default Counter
