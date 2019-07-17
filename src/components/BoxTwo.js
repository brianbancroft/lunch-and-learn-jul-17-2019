import React from 'react'
import { BoxThree } from '.'

const BoxTwo = ({ initialValue, changeValueFn } = {}) => {
  return <BoxThree initialValue={initialValue} changeValueFn={changeValueFn} />
}

export default BoxTwo
