import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Home1 from '../../Images/Home1.jpeg'
import Home2 from '../../Images/Home2.jpeg'
import Home3 from '../../Images/Home3.jpeg'
import Home4 from '../../Images/Home4.jpeg'
import Home5 from '../../Images/Home5.jpeg'


const Blog3 = () => {
    const Home = [
        {
        img : Home1
      },
      {
        img : Home2
      },
      {
        img : Home3
      },
      {
        img : Home4
      },
      {
        img : Home5
      },
    ]
    let aboutData = [
        {
            text : "•	Involvement of the private sector in contracting, RPF/DIPR, budgeting, and strategic liaison with government officials."
        },
        {
            text : "•	Design and implementation of a tech-enabled automation framework, including DBT/financial management, data analytics, micro profiling, dashboards, and war room support systems, in accordance with domestic and international partner/bodies' requirements."
        },
        {
            text : "•	Strategic programs to strengthen the entire workforce in accordance with the demands and requirements of the program."
        },
        {
            text : "•	Advanced rating/ranking workflows to improve the system as a whole."
        },
        {
          text : "•	Support for monitoring and evaluation - Coordination to push or sell technologically enabling solutions to government/non-government organizations in accordance with requirements."
      },
      {
        text : "We understand the complexities of the digital health landscape and are committed to providing our clients with innovative solutions that leverage the latest technological advancements. Our team is dedicated to supporting clients with end-to-end solutions that drive value and empower them to succeed in today's rapidly evolving healthcare ecosystem."
    },
    {
      text : `Digital saarthi is on the on the mission to empower everyone through its strategic consulting, tecno enable solutions, and capacity building
      Here are some tagline ideas for Digital Saarthi based on the mission you provided:
      `
  },
  {
    text : "•	Empowering Your Digital Journey"
},
{
  text : "•  Unlocking Your Potential with Technology"
},
{
  text : "•	Strategic Consulting for Digital Success"
},
{
  text : "•	Building Capacity, Driving Growth"
},
{
  text : "•	Innovative Solutions for a Digital World"
},
{
  text : "•	Charting Your Course to Digital Excellence"
},
{
  text : "•  Digital Transformation Made Simple"
},
  
    ]
      return (
        <div>
       <Carousel>
       { Home.map((e)=>  <Carousel.Item>
            <img
              className="d-block w-100"
              src={e.img}
              alt="First slide"
            />
          </Carousel.Item>)}
        </Carousel>
        <div name='About' className='w-full h-full bg-white text-black'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full'>
        <div className='pd-8 py-3 my-20'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 '> Digital Health</p>
        <p className='p-2 mt-10 text-justify'>At IITSPLL, we offer a comprehensive range of top-notch advice and consulting services in the field of digital health, using creative and technologically advanced assistance. Our team is equipped to provide cutting-edge solutions to complex challenges in the digital health space, such as:</p>
       { aboutData.map((e)=>  <p className='p-2 text-justify '>{e.text}</p> ) }
        </div>
      </div>
    </div>
        </div>
      )
}

export default Blog3
