// eslint-disable-next-line
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Home1 from '../../Images/Home1.jpeg'
import Home2 from '../../Images/Home2.jpeg'
import Home3 from '../../Images/Home3.jpeg'
import Home4 from '../../Images/Home4.jpeg'
import Home5 from '../../Images/Home5.jpeg'


const blog1 = () => {
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
            Head : "" ,
            text : " Startup Saarthi is designed to help entrepreneurs navigate the challenges of starting up and growing a business. The program offers mentorship, training, and resources to help entrepreneurs develop their ideas, create business plans, secure funding, and launch their businesses to the entire world."
        },
        {
          Head : "" ,
            text : "The Learn and Earn theme of Startup Saarthi reflects the program's commitment to providing entrepreneurs with practical skills and knowledge that they can use to build successful businesses. The program emphasizes the importance of learning by doing, and encourages entrepreneurs to take an active role in the development and growth of their businesses."
        },
        {
          Head : "•	Idea to Scale" ,
            text : "Our expert systems create a practical environment for the associates to grow their idea with all its needs and impacts. "
        },
        {
          Head : "•	Incubate and Implement " ,
            text : "Startup Saarthi acts here as an enabler for your incubation centre, that would help one’s ideas to incubate and finally hatch out with implementation in the real world smoothly."
        },
        {
          Head : "•	Mentoring " ,
            text : "We at Startup Saarthi are always there to support, assist and mentor. In very practical term, we work with the Entrepreneurs “As team Members”."
        },
        {
          Head : "•	Bonding and Building  " ,
            text : "Startup Saarthi also helps individuals to work as team, creates bonding within the groups thereby emphasizing on the importance of utilizing best practices using cross learning and sharing method. This enables groups to work closely and effectively."
        },
        {
          Head : "•	Analytics & Research Framework   " ,
            text : "Analytics / Micro-profiling and Research are one the very important setup of any of the assignments. We at Startup Saarthi possess the expertise to enable productive analytics and research system at every point which helps startups to evaluate and implement on time updates and modifications during the entire life cycle of the startups."
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
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 '> Startup Sharthi</p>
        <p className='p-2 mt-10 text-justify'>Startup Saarthi is an initiative of IITSPL that aims to support entrepreneurs and startups at every stage of their journey. The objective of Startup Saarthi is to provide comprehensive guidance and support to aspiring entrepreneurs, from the ideation stage to the establishment of a successful business.</p>
       { aboutData.map((e)=> 
        <div>
          <h5 className='font-bold'>{e.Head}</h5>
        <p className='p-2 text-justify '> {e.text}</p></div>  ) }
        </div>
      </div>
    </div>
        </div>
      )
}

export default blog1
