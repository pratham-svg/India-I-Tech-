import React,{ useState} from 'react'
import { AiOutlineClose , AiOutlineBars } from 'react-icons/ai'
import logo from '../../Images/LOGO.jpg'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [ nav , SetNav ] = useState(true)
    const nvaHandler = ()=>{
      SetNav(!(nav))
    }
    return (
     <div className='h-14 bg-white mb-5 '>
      <div className='text-white flex justify-between items-center h-16 px-4 max-w-full mx-auto m-3' >
        <img src={logo} alt='home' className='h-30 w-36 cursor-pointer' /> 
                <ul className='hidden md:flex cursor-pointer text-gray-700'>
         <li  className='p-4 hover:scale-125 duration-150 hover:text-black'><a href='/' className='text-black' >Home</a> </li>
         <li className='p-4 hover:scale-125 duration-150 hover:text-black'><Link to='About' 
         smooth duration={500}>About</Link></li>
              <li className='p-4 hover:scale-125 duration-150 hover:text-black'><Link to='Services' 
         smooth duration={500}>Services</Link></li>
         <li className='p-4 hover:scale-125 duration-150 hover:text-black'><Link to='Ventures'
          smooth duration={500}>Ventures</Link></li>
         <li className='p-4 hover:scale-125 duration-150 hover:text-black'><Link to='Association'
         smooth duration={500}>Association</Link></li>
         <li className='p-4 hover:scale-125 duration-150 hover:text-black'><Link to='Team'
         smooth duration={500}>Team</Link></li>
         <li className='p-4 hover:scale-125 duration-150 hover:text-black'><Link to='Career'
         smooth duration={500}>Career</Link></li>
          <li className='p-4 hover:scale-125 duration-150 hover:text-black'><Link to='Media'
         smooth duration={500}>Media</Link></li>
         <li className='p-4 hover:scale-125 duration-150 hover:text-black'><Link to='Contact'
         smooth duration={500}>Contact</Link></li>
        </ul>
        <div onClick={nvaHandler} className="text-black cursor-pointer hover:scale-105 duration-150 block md:hidden">
         {nav ? <AiOutlineBars size={20} /> : <AiOutlineClose size={20}/>}
        </div>
        <div className={!nav ? 'fixed w-[60%] h-screen left-0 top-0 border-r border-r-gray-900 bg-black ease-in-out duration-300' : "fixed left-[-100%] ease-in-out duration-300"}>
        <h1 className='w-full text-3xl font-semibold text-blue-400 pl-2'>INDIA-ITECH</h1>
          <ul className='p-4 uppercase cursor-pointer'>
          <li className='p-4  hover:scale-105 duration-150 hover:text-white'><Link to='Home'>Home </Link></li>
         <li className='p-4   hover:scale-105 duration-150 hover:text-white'>Company</li>
         <li className='p-4   hover:scale-105 duration-150 hover:text-white'>Resources</li>
         <li className='p-4   hover:scale-105 duration-150 hover:text-white'>About</li>
         <li className='p-4   hover:scale-105 duration-150 hover:text-white'>Contact</li>
          </ul>
        </div>
      </div>
      </div>
      
    )
}

export default Navbar
