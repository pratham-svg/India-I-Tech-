import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsArrowRightCircle } from 'react-icons/bs'

const Services = () => {
    const Services = [
        {
            id : 1,
            title : `Startup Shaarthi - Learn & Earn `,
            item : '0',
            text : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`
        },
        {
            id : 2,
            title : "Brand Building / Franchisee Business Modelling",
            item : '1',
            text : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`
        },
        {
            id : 3,
            title : "Counsulting and Strategic Advisory Services",
            item : '2',
            text : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`
        },
        {
            id : 4,
            title : "Building Startups Mentoritng incubations",
            item : '3',
            text : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`
        },
        {
            id : 5,
            title : "Procurements / Contacting",
            item : '4',
            text : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`
        },
        {
            id : 6,
            title : "Capacity Building (LMS Based )/ Certification",
            item : '5',
            text : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`
        },
        {
            id : 7,
            title : "Techno Unable Solutions",
            item : '6',
            text : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`
        },
        {
            id : 8,
            title : "B2B/B2B2C/B2C and B2G2/C Services",
            item : '7',
            text : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`
        },
    ]
  return (
    <div name="Services" className=' bg-white w-full
    max-h-screen my-20'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center 
      w-full h-full text-black'>
        <div>
            <p className='text-4xl font-bold inline p-2 border-black border-b-4 text-blue-900'>Offered Services</p>
        </div>
       <div className='my-20'>
 <Accordion flush>
 { Services.map(({title , text , id , item})=> <div id={id}>  <Accordion.Item eventKey={item}  >
        <Accordion.Header><div className='font-bold text- text-blue-900 text-2xl'><div className='flex '><div className='mx-5'><BsArrowRightCircle/></div>  {title}</div> </div></Accordion.Header>
        <Accordion.Body>
       <div className='mx-32'>{title}</div> 
        </Accordion.Body>
      </Accordion.Item> </div>) }
    </Accordion>  
    </div>

        {/* <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center 
          py-16 px-12 sm:px-0 '>
           { Services.map(({ id , style , title , src})=>   <div key={id} className={`shadow-md font-bold hover:scale-105 duration-500 py-2 rounded-lg h-32 text-white bg-gradient-to-br from-blue-500 to-red-500 cursor-pointer`}>
                <p className='my-8'>{title}</p>
            </div>)}
           
        </div> */}
      </div>
    </div>
  )
}

export default Services
