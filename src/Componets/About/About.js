import React from 'react'

const About = () => {
    let aboutData = [
        {
            text : "At IITSPL, We believe in empowering individuals at all levels, from local sellers and institutes to students, to become leading contributors in society. "
        },
        {
            text : `Our fundamental principle, "On the Mission to Empower" drives our commitment to providing individuals with the necessary tools and resources to grow their businesses, make a positive social impact, and develop sustainable wealth.`
        },
        
    ]
  return (
    <div name='About' className='w-full h-full bg-white text-black'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full'>
        <div className='pd-8 py-3 my-20'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-blue-900 '> About IITSPL</p>
        <p className='p-2 mt-10 text-justify'></p>
       { aboutData.map((e)=>  <p className='p-2 text-justify '>{e.text}</p> ) }
        </div>
      </div>
    </div>
  )
}

export default About
