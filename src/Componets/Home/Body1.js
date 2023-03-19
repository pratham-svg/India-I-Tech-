// eslint-disable-next-line
import React from 'react'
import "react-multi-carousel/lib/styles.css";
import DS from '../../Images/DH.jpeg'
import DH from '../../Images/DS.jpeg'
import DST from '../../Images/DST.jpeg'

const Body1 = () => {
    const data = [{
        Head : "StartUp Sharthi" , 
        img : DST,
        SubHead : "Empowering Startup Success",
        Para : "Startup Saarthi is an initiative of IITSPL that aims to support entrepreneurs and startups at every stage of their journey. The objective of Startup Saarthi is to provide comprehensive guidance and support to aspiring entrepreneurs, from the ideation stage to the establishment of a successful business.",
        Link : '/b1'
      },
    {
        Head : "Digital Sharthi" , 
        img : DH,
        SubHead : "Guiding Startups to Thrive",
        Para : "Startup Saarthi is a comprehensive virtual platform designed to support and assist startups through every stage of the process, from ideation to execution, while also ensuring adherence to regulatory compliances and standard protocols. Our program's core objective is to pay special attention to non-tech individuals, females, and those from rural and tribal areas who have a passion for becoming successful entrepreneurs.",
        Link : '/b2'   
      },
    {
        Head : "Digital Health" , 
        img : DS,
        SubHead : "Innovative Solutions for Digital Health",
        Para : "We understand the complexities of the digital health landscape and are committed to providing our clients with innovative solutions that leverage the latest technological advancements. Our team is dedicated to supporting clients with end-to-end solutions that drive value and empower them to succeed in today's rapidly evolving healthcare ecosystem.",
        Link : '/b3'
      }]
  return (
    <div name='Ventures' className='w-full bg-white p-2'>
      <div className='flex justify-center text-center m-4 text-4xl font-bold text-blue-900'> Our Ventures</div>
   {data.map(({Head , img ,SubHead , Para , Link})=> <div id={Head} className='max-w-[1400px] mx-auto grid md:grid-cols-2 py-4'>
     <img className='w-[250px] mx-auto' src={img} alt='/' />
    <div className='flex flex-col justify-center'>
     <p className='md:text-3xl sm:text-3xl text-2xl font-bold
      py-2'>{Head}</p>
     <h4 className='text-black font-bold '>{SubHead}</h4>
     <p className='text-justify'>{Para}
     </p>
     <button className='bg-blue-400 w-[200px] font-bold my-6 mx-auto py-3 rounded-md text-white hover:scale-105 duration-150 '> < a href={Link} className='text-white' > Learn More</a> </button>
     </div>
    </div>) }
  </div>
  )
}

export default Body1
