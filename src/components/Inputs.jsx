import React from 'react'
const Inputs = ({ type, placeholder, heading, onchange, text }) => {

    return (
        <div className=' flex items-center justify-center my-4'>

            <div className='shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-[#3f3f46] rounded-md w-1/3 flex flex-col '>

                <div>
                    <h3 className='font-semibold   hover:underline text-[18px] text-center'>{heading}</h3>

                    <div className='flex justify-center'>
                        <input className='rounded-full px-2 my-2 py-1 text-center' onChange={onchange} type={type} placeholder={placeholder} />
                        <p>{text}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inputs