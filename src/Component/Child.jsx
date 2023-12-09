import React, { useContext } from 'react'
import { AppContext } from './useContext/UserContex'

function Child() {
    const data = useContext(AppContext)
  return (
    <div>
      <h1>Hi my name is  {data.name} and my age is {data.age}</h1>
    </div>
  )
}

export default Child;