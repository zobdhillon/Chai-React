// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const [length, setLength] = useState(12)
  const [numAlllow, setNumAllow] = useState(false)
  const [charAlllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAlllow) str += "0123456789";
    if (charAlllow) str += "`~!@#$%^&*()-_=+[]{}";

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }    

    setPassword(pass);

  }, [length, charAlllow, numAlllow, setPassword])

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAlllow, charAlllow, passwordGenerator])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-4 my-8 text-orange-700 bg-gray-700'>
        <h1 className='text-4xl text-center text-white m-4'>Password Generator</h1>
        <div className='bg-white flex shadow-sm rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white placeholder-black'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClip}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm font-bold gap-x-2'>
          <div className='flex items-center gap-x-1 mx-2'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numAlllow}
            id='numberInput'
            onChange={() => {
              setNumAllow((prev) => !prev)
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

            <div className='flex items-center gap-x-1 mx-2'>
            <input 
            type="checkbox" 
            defaultChecked={charAlllow}
            id='characterInput'
            onChange={() => {
              setCharAllow((prev) => !prev)
            }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
