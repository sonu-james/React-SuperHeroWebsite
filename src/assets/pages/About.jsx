import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function About() {
  return (
    <>
      <div className='container-fluid about' >
        <Header />
        <div className='my-5' >
          <Row>
            <Col sm={12} md={1}></Col>
            <Col sm={12} md={5} className=' aboutImg d-flex align-items-center justify-content-center rounded mt-4'>
              <img src="https://d9hhrg4mnvzow.cloudfront.net/my.discoveryplace.org/marvel-lights/adf7cee1-marvel-uosh-full-2_10xc0xc0tm0ru01k053028.png" alt="no image" height={'470px'} width={'100%'}/></Col>
            <Col sm={12} md={5}>
              <div className='d-flex align-items-center justify-content-center mt-5 flex-column text-light p-3'>
                <h1 className='text-light'>About Us</h1>
                <p className='mt-3'style={{textAlign:'justify'}}>A superhero is a character with extraordinary powers that performs heroic actions. Unlike police, firefighters or doctors, all of whom are heroes in their own right, superheroes are defined by their unique capabilities, such flight, strength, speed or invincibility (to name a few). Superheroes are also expected to act on a strict moral code. They are always categorized as “good” and rarely, if ever, stray from this path. Finally, a superhero needs to be sympathetic. If the audience cannot identify with the character, then the superhero isn’t much of a hero at all. .</p>
               <Link to={'https://www.studiobinder.com/blog/what-is-a-superhero-definition/'} target='_blank'><button className='btn btn-danger'>Explore More</button></Link> 
              </div>
            </Col>
            <Col sm={12} md={1}></Col>
          </Row>
          <Row>
            <Col sm={12} md={1}></Col>
            <Col sm={12} md={10} className='d-flex align-items-center justify-content-center mt-5'>
            <iframe width="960" height="480" src="https://www.youtube.com/embed/SlFTbbcx2qs" title="Journey Through the History of Marvel Comics (feat. Run the Jewels)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Col>
            <Col sm={12} md={1}></Col>
          </Row>

        </div>
        <Footer />
      </div>

    </>
  )
}

export default About