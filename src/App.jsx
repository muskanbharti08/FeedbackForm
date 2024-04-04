import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './Component/InputField'
import MultipleInputFields from './Component/MultipleInputFields'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className="">
    hellow i am Muskan bharti
    {/* <InputField/> */}

    <MultipleInputFields/>
   </div>
   </>
  )
}

export default App
