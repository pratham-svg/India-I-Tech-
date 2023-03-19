import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Home1 from '../../Images/Home1.jpeg'
import Home2 from '../../Images/Home2.jpeg'
import Home3 from '../../Images/Home3.jpeg'
import Home4 from '../../Images/Home4.jpeg'
import Home5 from '../../Images/Home5.jpeg'


const Blog2 = () => {
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
            text : "Our platform provides cutting-edge technological solutions that empower businesses to adapt and thrive in times of crisis. We offer a range of services, including back-office automation, financial management, data analytics, and emergency response systems. Our team works closely with our clients to understand their unique needs and tailor our solutions to meet their specific requirements."
        },
        {
            text : "At Digital Saarthi, we understand that a business's success depends on the strength of its workforce. To this end, we offer strategic programs that focus on developing and strengthening the skills of our clients' employees. Our goal is to ensure that they are equipped with the knowledge and tools they need to succeed in the ever-evolving digital landscape."
        },
        {
            text : "In today's fast-paced world, businesses must be able to quickly adapt to changing circumstances. With Digital Saarthi, you can rest assured that your business is in good hands. We offer advanced rating and ranking workflows to continually improve our systems, and our support for monitoring and evaluation ensures that we deliver the best possible solutions. Let us help you take your business to the next level."
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
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 '> Digital Sharthi</p>
        <p className='p-2 mt-10 text-justify'>This was conceptualized in 2020 during the peak of the COVID-19 pandemic. We observed that due to non-standard quality tech-enabled systems, small and medium businesses, as well as their workforces, faced significant challenges. They were unable to perform back-office duties and lacked the necessary tools to handle emergency scenarios when human lives were at high risk. It was clear that urgent action was needed to save both human lives and businesses, and this is where Digital Saarthi came in.</p>
       { aboutData.map((e)=>  <p className='p-2 text-justify '>{e.text}</p> ) }
        </div>
      </div>
    </div>
        </div>
      )
}

export default Blog2
