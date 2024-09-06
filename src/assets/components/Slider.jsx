import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <>
     <Carousel className=' rounded p-3' style={{backgroundColor:'#910000'}}>
      <Carousel.Item >
      <div className='d-flex justify-content-center align-items-between'>
       <img src="https://www.pngmart.com/files/9/Captain-Marvel-Transparent-PNG.png" alt=""  height={'300px'} className='mx-5'/>
       <img src="https://www.pngkit.com/png/full/300-3008612_captain-america.png" alt="" height={'300px'} className='mx-5' />
       <img src="https://www.pngplay.com/wp-content/uploads/6/Marvel-Black-Panther-PNG-HD-Quality.png" alt=""  height={'300px'} className='mx-5'/></div>
       
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex justify-content-center align-items-between'>
       <img src="https://www.pngmart.com/files/9/Captain-Marvel-Transparent-PNG.png" alt=""  height={'300px'} className='mx-5'/>
       <img src="https://www.pngkit.com/png/full/300-3008612_captain-america.png" alt="" height={'300px'} className='mx-5' />
       <img src="https://www.pngplay.com/wp-content/uploads/6/Marvel-Black-Panther-PNG-HD-Quality.png" alt=""  height={'300px'} className='mx-5'/></div>
       
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex justify-content-center align-items-between'>
       <img src="https://www.pngmart.com/files/9/Captain-Marvel-Transparent-PNG.png" alt=""  height={'300px'} className='mx-5'/>
       <img src="https://www.pngkit.com/png/full/300-3008612_captain-america.png" alt="" height={'300px'} className='mx-5' />
       <img src="https://www.pngplay.com/wp-content/uploads/6/Marvel-Black-Panther-PNG-HD-Quality.png" alt=""  height={'300px'} className='mx-5'/></div>
       
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Slider