import React from 'react'
import DS from '../../Images/DH.jpeg'
import DH from '../../Images/DS.jpeg'
import DST from '../../Images/DST.jpeg'

const Body2 = () => {
    const img = [{
        img : DS,
        venture : 'Sharthi'
      } ,
      {
        img : DH,
        venture : 'Health'
      } ,
      {
        img : DST,
        venture : 'Startup'
      } ,
      ]
      return (
        
        <div className=' w-full py-[3rem]  bg-gray-100 '>
         <div><div className='text-4xl font-bold flex justify-center'> Our Ventures</div></div> 
          <div className='md:flex flex-row'>
         {img.map((e)=> <div className='max-w-[1240px] mx-auto grid-row-3 gap-8 '>
             <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg 
            hover:scale-105 duration-150 mt-10 md:w-96 bg-white'>
              <img className='w-40 mx-auto bg-white' src={e.img} alt='Single'/>
              <h2 className=' text-2xl font-bold text-center py-1'>{e.venture}</h2>
                  <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
            </div>
          </div>)}
          </div>
          </div>
      )
}

export default Body2
