import React from 'react'
import { BoxTwo } from '.'

const BoxOne = ({ initialValue, changeValueFn } = {}) => {
  return <BoxTwo initialValue={initialValue} changeValueFn={changeValueFn} />
}

export default BoxOne
