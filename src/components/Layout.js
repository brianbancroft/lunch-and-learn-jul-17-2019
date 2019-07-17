import React from 'react'
import { Counter } from '.'

const Layout = () => {
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
      </main>
    </>
  )
}

export default Layout
