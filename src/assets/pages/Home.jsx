import React from 'react'
import Header from '../components/Header'
import '../pages/Home.css'
import { Col, Row } from 'react-bootstrap'

import Slider from '../components/Slider';






function Home() {
  return (
    <>

      <div id='home-page'>
        <Header />
        <Row className='w-100'>
          <Col sm={12} md={1}></Col>
          <Col sm={12} md={6}>
            <div className='text-danger d-flex justify-content-center align-items-center m-3  p-3 fw-bold flex-column ' style={{ height: '400px' }}>
              <p style={{ color: '#ff0000', fontSize: '40px' }}>"When you decide not to be afraid, you can find friends in super unexpected places." </p>
              <h6 className='text-light mt-2'>- Ms. Marvel, 'Captain Marvel'.</h6>
            </div>
          </Col>
          <Col sm={12} md={5}></Col>
          
          <Row className='w-100'>
          <Col sm={12} md={1}></Col>
          <Col sm={12} md={10}>
          <div className='w-100 p-5' style={{height:'400px'}}>
             <Slider/>
            </div>
          </Col>
          <Col sm={12} md={1}></Col>
        </Row>
        </Row>
        <Row>
          <Col sm={12} md={1}></Col>
          <Col sm={12} md={10}>
          <div className='bg-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sapiente magni delectus voluptas exercitationem hic nobis, aliquam nisi ipsa quaerat quam deleniti quisquam animi vitae provident reprehenderit temporibus placeat qui.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro beatae deserunt officiis. Aliquam ratione, quis sit ex ab illo inventore reprehenderit provident quae, fuga minus, quasi temporibus officia doloribus!</div>
          </Col>
          <Col sm={12} md={1}></Col>
        </Row>

       
      </div>

    </>

  )
}

export default Home