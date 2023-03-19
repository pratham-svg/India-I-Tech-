import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import as1 from '../../Images/as1.jpeg'
import as2 from '../../Images/as2.jpeg'
import as3 from '../../Images/as3.jpeg'
import as4 from '../../Images/as4.jpeg'
import as5 from '../../Images/nepuf.png'

const Associates = () => {
    const img = [
      {
        id : 2,
        img : as2
      },
      {
        id : 3,
        img : as3
      },
      {
        id : 4,
        img : as4
      },
      {
        id : 5,
        img : as5
      },
    ]
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
  return (
    <div className='ml-20' name='Association'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center 
      w-full h-full text-black'>
        <div>
            <p className='text-4xl font-bold inline p-2 border-black border-b-4 text-blue-900'>Our Association</p>
            {/* <p className='py-6'>These are the technologies I've worked with</p> */}
        </div>
        </div>
        <div className='p-4 my-20'>
      <Carousel responsive={responsive} showDots={false}  infinite={true} swipeable={true}>
     { img.map(({id , img})=> <div id={id}><img className='h-40 w-40' src={img} alt='s1'/> </div> ) }
     <div><img className='h-40 w-60' src={as1} alt='s1'/></div>
</Carousel>
    </div>
    </div>

  )
}

export default Associates
