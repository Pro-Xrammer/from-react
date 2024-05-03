import React from 'react'
import { useState } from 'react'
import Inputs from './components/Inputs';
const App = () => {
  const [text, settext] = useState("");
  const handle = (e) => {
    settext(e.target.value)
  }
  return (
    <>
      <div className='bg-[#52525b]  '>
        <h1 className='text-[29px] font-bold py-[20px] text-center'>Registration From</h1>
        <Inputs onChange={handle} placeholder={"Always use capital letters"} type={"text"} heading={"First Name"} />
        <Inputs onChange={handle} placeholder={"Always use capital letters"} type={"text"} heading={"Last Name"} />
        <Inputs onChange={handle} placeholder={"abc@gmail.com"} type={"email"} heading={"E Mail"} />
        <Inputs onChange={handle} placeholder={"Password"} type={"Password"} heading={"Password"} />
        <Inputs onChange={handle} placeholder={"Confrim Password"} type={"Password"} heading={"Confrim  Password"} />
        <Inputs onChange={handle} placeholder={"+ 92"} type={"number"} heading={"Mobile Number"} />
        <input type="checkbox" className='mx-[29rem] my-4 '/>
        <p className='absolute left-[31rem] top-[41rem] text-[18px]'>Agree and Aceept to continue</p>
        <div className='flex justify-center '>
          <button className='rounded-[15px] bg-slate-800 p-[11px]  text-white font-semibold hover:text-[#6ee7b7] mb-4 '>Submit Now</button>
        </div>
        {/* <input className='Enter your name' type="text" onChange={handle} />
        <p className='bg-gray-300 text-black'>{text}</p> */}
      </div>
    </>
  )
}

export default App 