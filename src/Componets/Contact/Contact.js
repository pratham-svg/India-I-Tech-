// eslint-disable-next-line
import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div name="Contact">
       <div  className='m-10 mt-20 mb-40 '>
 <div className="container">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">Registered Office Address  </div>
          <div className="text-two"> B-20, Mahal Yojna, Behind Akshay Patra, Jagatpura, Jaipur-302017 (RAJ.)</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">94130 62942</div>
          <div className="text-two">0291- 3558839</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">iitspl@indiaitech.in</div>
          <div className="text-two"></div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text text-blue-900">Contact us</div>
      <form action='https://getform.io/f/19de0091-fa66-48fa-8bf7-7af0099d3f93' method='POST'>
        <div className="input-box">
          <input type="text" name='name' placeholder="Enter your name" />
        </div>
        <div className="input-box">
          <input type="text" name='email' placeholder="Enter your email" />
        </div>
        <div className="input-box">
          <input type="text" name='mobile' placeholder="Enter your Mobile" />
        </div>
        <div className="input-box message-box">
        <textarea type="message" name='message' placeholder="Enter your Please inter your message" /> 
        </div>
        <button className="button">
        <input type="button" value="Send Now" />
        </button>
      </form>
    </div>
    </div>
  </div>
    </div>
    </div>
  )
}

export default Contact
