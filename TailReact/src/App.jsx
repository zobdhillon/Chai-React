// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-700 rounded-2xl p-2'>Tailwind React</h1>
      <br /><br />
      <Card userName={'Zob'} btnText='Click Me'  />
      <Card userName={'Dhillon'} />
    </>
  )
}

export default App
