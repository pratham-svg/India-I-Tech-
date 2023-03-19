import React from 'react'
import SPShrimali from '../../Images/S_P_Shrimali.jpeg'
import RSP from '../../Images/Radheshyam_Panchariya.jpeg'
import RV from '../../Images/Rahul_Vyas.jpg'
import SV from '../../Images/Sudha_Vyas.jpeg'
import './Team.css'

const Team = () => {
    const Data =[{
        name : "Rahul Vyas",
        image :  RV,
        designation : 'Founder',
        linkdin : "https://www.linkedin.com/in/vyasrahul/",
        mail : 'mailto:rahulvyas@indiaitech.in',
    },
    {
        name : "S.P.Shrimali",
        image : SPShrimali ,
        designation : 'Director',
        linkdin : 'https://www.linkedin.com/in/s-p-shrimali-banker/',
        mail : 'mailto:spshrimali@indiaitech.in'
    },
    {
        name : "R.S.Panchariya",
        image : RSP ,
        designation : 'Director',
        linkdin : "https://www.linkedin.com/in/radheshyam-panchariya-9784a043/",
        mail : 'mailto:rpanchariya@indiaitech.in'
    },
    {
        name : "Sudha Vyas",
        image : SV ,
        designation : 'Director',
        linkdin : " ",
        mail : ' '
    }
  ]
  return (
    <div name='Team'>
         <div>
       <div className='Containerabout'>
    <div ><h1 className='text-4xl font-bold text-blue-900'>Management Team</h1></div>
    <div className="mx-20 txt-2xl mt-10">India I-Tech Services (P) Ltd. (IITSPL) is a unique technology-driven company focused on building India's largest network of last-mile retail touchpoints to deliver real-time banking, insurance, e-governance, e- commerce services to the unserved rural and urban markets
</div>
<div className='sun-ContainerAbout'> 
{Data.map((e)=>  <div className="teamsAbout">
        <img className='imgAbout' src={e.image} alt={e.name} style={{height : '200px'}}></img>
        <div className="nameAbout">{e.name}</div>
        <div className="desigAbout">{e.designation}</div>
        <div className="aboutAbout"></div>
        <div className="social-links">
          <a href={e.linkdin}><i className='fa fa-linkedin'></i></a>
          <a href={e.mail}><i class="fa-solid fa-square-envelope"></i></a>
        </div>
      </div>)}
     </div>
    </div>
    </div>
    </div>
  )
}

export default Team
