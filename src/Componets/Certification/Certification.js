// eslint-disable-next-line
import React from 'react'
import msme from '../../Images/Cer1.jpeg'
import cer2 from '../../Images/Cer2.jpeg'

const Certification = () => {
    const Certification = [
        {
            id : 1,
            src : msme,
            title : "MSME",
            style : 'shadow-orange-500'
        },
        {
            id : 2,
            src : cer2,
            title : "StartUp India",
            style : 'shadow-blue-500'
        },

    ]
  return (
    <div name="Certification" className=' bg-white w-full
    max-h-screen my-40'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center 
      w-full h-full text-black'>
        <div>
            <p className='text-4xl font-bold inline p-2 border-black border-b-4 text-blue-900'>Certification</p>
            {/* <p className='py-6'>These are the technologies I've worked with</p> */}
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center 
          py-16 px-12 sm:px-0'>
           { Certification.map(({ id , style , title , src})=>   <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg `}>
                <img src={src} className='w-44 mx-auto' alt=""/>
                {/* <p className='mt-4'>{title}</p> */}
            </div>)}
           
        </div>
      </div>
    </div>
  )
}

export default Certification
