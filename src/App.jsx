import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './Component/Count'
import Form from './Component/Form'
import Clearup from './Component/Clearup'
import Child from './Component/Child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Count/> */}
     {/* <Form/> */}
     <Clearup/>
     <Child></Child>

    </>
  )
}

export default App
