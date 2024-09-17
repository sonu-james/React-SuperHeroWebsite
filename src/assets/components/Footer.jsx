import { faFacebook, faSquareInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Footer() {
  return (
<>
<div className=' footer text-light bg-dark '>
    <Row className='w-100'>
        <Col sm={12} md={4} className='d-flex justify-content-center align-items-center flex-column mt-2'>
        <h3 className='mt-5'  style={{color:'#ff0000'}}>SuperHero Hunters</h3>
        <p className=' ms-4 p-3 ' style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias deserunt sed enim recusandae mollitia eaque nesciunt, explicabo atque numquam unde, sequi tenetur nam saepe architecto adipisci nisi exercitationem. Ad, tenetur.</p>
        </Col>
        <Col sm={12} md={4} className='d-flex justify-content-center align-items-center flex-column mt-2'>
        <h3 style={{color:'#ff0000'}}>Menu</h3>
        <Link to={'/'}className='text-light' style={{textDecoration:'none'}}>Home</Link>
        <Link to={'/about'} className='text-light'style={{textDecoration:'none'}}>About</Link>
        <Link to={'/grivancepage'} className='text-light' style={{textDecoration:'none'}}>Conact</Link>
        
        </Col>
        <Col sm={12} md={4} className='d-flex justify-content-center align-items-center flex-column mt-2'>
        <h3 className='mt-3'  style={{color:'#ff0000'}}>Follow With Us</h3>
       <div className='d-flex'>
       <Link to='https://www.instagram.com/marvel/'style={{textDecoration:'none',color:'white'}}><FontAwesomeIcon icon={faFacebook} size ='xl'className='me-4' /></Link>
       <Link to='https://www.instagram.com/marvel/'style={{textDecoration:'none',color:'white'}}><FontAwesomeIcon icon={faSquareInstagram}size ='xl' className='me-4'/></Link> 
        <Link to='https://www.facebook.com/p/Superhero-World-100063519138576/?_rdr'style={{textDecoration:'none',color:'white'}}><FontAwesomeIcon icon={faTwitter} size ='xl'  className='me-4' /></Link>
        {/* <FontAwesomeIcon icon={faTelegram} size ='xl' className='me-4'/> */}
       </div>
        </Col>
    </Row>
    
</div>
</>
  )
}

export default Footer