import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai'
import Logo from '../../Images/LOGO.jpg'  


const Footer = () => {
    const data = [
        { 
          r1 : "Home"  ,
          c1 : 'Services',
          c2 : 'Ventures',
          c3 : 'Team',
          c4 : 'Association',
        },
        { 
            r1 : "Support"  ,
            c1 : 'Pricing',
            c2 : 'Documentation',
            c3 : 'Guides',
            c4 : 'API Status',
          },
          { 
            r1 : "Company"  ,
            c1 : 'About',
            c2 : 'Blog',
            c3 : 'Career',
            c4 : 'Media',
          },
          { 
            r1 : "Legal"  ,
            c1 : 'Claim',
            c2 : 'Policy',
            c3 : 'Terms',
            c4 : 'T&C',
          },
          
    ]  
    const Icons = [
      {
        Icons : FaDribbbleSquare
      },
      {
        Icons : FaFacebookSquare
      },
      {
        Icons : FaInstagram
      },
      {
        Icons : FaTwitterSquare
      },
      {
        Icons : AiOutlineLinkedin
      }
    ]
      return (
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-500'>
       <div>
      <h1 className='w-full text-3xl font-bold text-[#de7238]'>
        <img className='h-28 w-60' src={Logo} alt='footer' />
      </h1>
      <p className='py-4 font-bold text-blue-700'>On the Mission to Empower</p>
       <div className='flex justify-between md:w-[75%] my-6 cursor-pointer '>
      <FaFacebookSquare className="text-4xl hover:text-5xl duration-150"/>
       <FaInstagram className="text-4xl hover:text-5xl duration-150" />
       <FaTwitterSquare className="text-4xl hover:text-5xl duration-150" />
       <a href='https://www.linkedin.com/company/india-i-tech-services-pvt-ltd-iitspl/'> <AiOutlineLinkedin className="text-4xl hover:text-5xl duration-150 text-black" /> </a>
       <FaDribbbleSquare className="text-4xl hover:text-5xl duration-150"/>
       </div>
       </div>
       <div className='lg:col-span-2 flex justify-between mt-6'>
        {data.map(({r1 , c1 , c2 , c3 , c4}) => <div>
            <h6 className='font-medium text-gray-500 ml-7'>{r1}</h6>
            <ul>
                <li className='py-2 text-sm'>{c1}</li>
                <li className='py-2 text-sm'>{c2}</li>
                <li className='py-2 text-sm'>{c3}</li>
                <li className='py-2 text-sm'>{c4}</li>
            </ul>  
        </div>)}
       </div>
      </div>
      )
}

export default Footer
