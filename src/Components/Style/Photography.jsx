import React from 'react'
import { Polegone, Photo} from '@/Assets/SVGs/SVG'
const Photography = () => {
  return (
    <div className='flex justify-between items-center relative ml-[76px]'>
        <div>
        <Polegone className='w-[36rem] h-56 absolute'/>
        <Photo className='ml-[436px] mt-[72px] relative'/>
        </div>
        <div className='absolute left-[613px] top-[70px]'>
            <h3 className='font-bold text-4xl clip' >STEP 02</h3>
            <p className='w-48 font-bold text-2xl'>
            We photograph
            </p>
        </div>

    </div>
  )
}

export default Photography