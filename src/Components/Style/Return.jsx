import React from 'react'
import { Polegone, Return} from '@/Assets/SVGs/SVG'
const Returning = () => {
  return (
    <div className='flex justify-between items-center relative'>
        <div>
        <Polegone className='w-[36rem] h-56 absolute'/>
        <Return className='ml-[436px] mt-[72px] relative'/>
        </div>
        <div className='absolute left-[613px] top-[70px]'>
            <h3 className='font-bold text-4xl clip'>STEP 03</h3>
            <p className='w-52 font-bold text-2xl'>
            We return the samples
            </p>
        </div>
    </div>
  )
}

export default Returning