import React from 'react'
import Header from '../components/Header'
import '../pages/Home.css'
import { Col, Row } from 'react-bootstrap'
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import ChatBot from 'react-simple-chatbot';


function Home() {
 
  return (
    <>
       
      <div id='home-page'>
      <ChatBot steps={[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      end: true,
    },
  ]}
      floating={true}
      />
        <Header />
        <Row className='w-100'>
          <Col sm={12} md={1}></Col>
          <Col sm={12} md={6}>
            <div className=' d-flex justify-content-center align-items-center m-3  p-3 fw-bold flex-column ' style={{ height: '400px' }}>
              <p className='para' style={{ color: '#ff0000', fontSize: '40px' }}>"When you decide not to be afraid, you can find friends in super unexpected places." </p>
              <h6 className='text-light mt-2 para'>- Ms. Marvel, 'Captain Marvel'.</h6>
            </div>
          </Col>
          <Col sm={12} md={5}></Col>

          <Row className='w-100'>
            <Col sm={12} md={1}></Col>
            <Col sm={12} md={10}>
              <div className='w-100 p-5' style={{ height: '400px' }}>
                <Slider />
              </div>
            </Col>
            <Col sm={12} md={1}></Col>
          </Row>
        </Row>

        <Row className='w-100'>
          <Col sm={12} md={1}></Col>
          <Col sm={12} md={10}>
            <h1 className='mt-3'>Way of Our Journey</h1>
            <div className=' ms-2' >
              <Row className='w-100 d-flex justify-content-center align-items-center'>
                <Col sm={12} md={6} className='d-flex justify-content-center align-items-center'>
                  <img src="https://www.popmythology.com/wp-content/uploads/2012/12/cyclops_2.jpg" alt="no image" className='w-75 p-3 characterImg' height={'250px'} />
                </Col>
                <Col sm={12} md={6}>
                  <div className='mt-4'>
                    <h4 className='para'>CYCLOPS</h4>
                    <p className='para' style={{textAlign:'justify'}}>Cyclops is a superhero appearing in American comic books published by Marvel Comics and is a founding member of the X-Men. Created by writer Stan Lee and artist/co-plotter Jack Kirby, the character first appeared in the comic book The X-Men. Cyclops is a member of a subspecies of humans known as mutants, born with superhuman abilities. Cyclops emits powerful beams of energy from his eyes and can only control the beams with the aid of special eyewear, which he must always wear. </p>
                  </div>
                </Col>
              </Row>
              <Row className='w-100 d-flex justify-content-center align-items-center'>
                <Col sm={12} md={6} >
                  <div className=''>
                    <h4 className='para'>Caption America</h4>
                    <p className='para'  style={{textAlign:'justify'}}>Captain America is a superhero created by Joe Simon and Jack Kirby who appears in American comic books published by Marvel Comics. The character first appeared in Captain America Comics #1, published on December 20, 1940, by Timely Comics, a corporate predecessor to Marvel. Captain America's civilian identity is Steve Rogers, a frail man enhanced to the peak of human physical perfection by an experimental "super-soldier serum" after joining the United States Army to aid the country's efforts in World War II. </p>
                  </div>
                </Col>
                <Col sm={12} md={6} className='d-flex justify-content-center align-items-center'>
                  <img src="https://wallpapercave.com/wp/wp7117162.jpg" alt="no image" className='w-75 p-3 characterImg' height={'300px'} />
                </Col>
              </Row>
              <Row className='w-100 d-flex justify-content-center align-items-center'>
                <Col sm={12} md={6} className='d-flex justify-content-center align-items-center'>
                  <img src="https://wallpaperaccess.com/full/313080.jpg" alt="no image" className='w-75 p-3 characterImg' height={'300px'} />
                </Col>
                <Col sm={12} md={6}>
                  <div className=''>
                    <h4 className='para'>Spider-Man</h4>
                    <p className='para'  style={{textAlign:'justify'}}>Spider-Man in film dates back to 1977, the rights belonging to Marvel until 1999, when Sony bought them for $7 million.[1] He has been Marvel's most successful character in the cinema industry ever since. After selling the Spider-Man motion picture rights to Sony, Marvel eventually founded its own studio, developing the Marvel Cinematic Universe (MCU) based on the characters they still held the rights to.</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={1}></Col>

        </Row>
        <Footer />
      </div>
    
    </>

  )
}

export default Home