// eslint-disable-next-line
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Home1 from '../../Images/Home1.jpeg'
import Home2 from '../../Images/Home2.jpeg'
import Home3 from '../../Images/Home3.jpeg'
import Home4 from '../../Images/Home4.jpeg'
import Home5 from '../../Images/Home5.jpeg'




const HomeNew = () => {
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
    </div>
  )
}

export default HomeNew
