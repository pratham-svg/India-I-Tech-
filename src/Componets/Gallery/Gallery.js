import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import G1 from '../../Images/G1.png'
import G2 from '../../Images/G2.png'
import G3 from '../../Images/G3.png'
import G4 from '../../Images/G4.png'


const Gallery = () => {
    const gallery = [
        {
        gallery1 : G1
    } ,
    {
        gallery1 : G2
    } ,
    {
        gallery1 : G3
    } ,
    {
        gallery1 : G4
    } ,
]
  return (
    <div name='Media'>
          <div className='my-20 ml-60 '>
            <p className='text-4xl font-bold inline p-2 border-black border-b-4 text-blue-900'>Media</p>
            {/* <p className='py-6'>These are the technologies I've worked with</p> */}
        </div>
 <Carousel>
  {gallery.map((e)=>  <Carousel.Item>
        <img
          className="d-block w-100"
          src={e.gallery1}
          alt="First slide"
        />
      </Carousel.Item>)}
    </Carousel>
    </div>
  )
}

export default Gallery
