import React, { useContext } from 'react'
import { Counter } from '.'
import DataContext from '../context'

const BoxThree = () => {
  const { initialValue, changeValueFn } = useContext(DataContext)

  return <Counter initialValue={initialValue} changeValueFn={changeValueFn} />
}

export default BoxThree
