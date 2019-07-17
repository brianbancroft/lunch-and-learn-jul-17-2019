import React from 'react'
import { Counter } from '.'

const BoxThree = ({ initialValue, changeValueFn } = {}) => {
  return <Counter initialValue={initialValue} changeValueFn={changeValueFn} />
}

export default BoxThree
