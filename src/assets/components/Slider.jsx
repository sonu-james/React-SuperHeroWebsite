import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <>
     <Carousel className='slider rounded p-3' >
      <Carousel.Item >
      <div className='d-flex justify-content-center align-items-between'>
       <img src="https://www.pngmart.com/files/9/Captain-Marvel-Transparent-PNG.png" alt=""  height={'300px'} className='mx-5'/>
       <img src="https://www.pngkit.com/png/full/300-3008612_captain-america.png" alt="" height={'300px'} className='mx-5' />
       <img src="https://www.pngplay.com/wp-content/uploads/6/Marvel-Black-Panther-PNG-HD-Quality.png" alt=""  height={'300px'} className='mx-5'/></div>
       
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex justify-content-center align-items-between'>
       <img src="https://www.pngarts.com/files/1/Thor-PNG-Transparent-Image.png" alt=""  height={'300px'} className='mx-5'/>
       <img src="http://clipart-library.com/images_k/hawkeye-transparent/hawkeye-transparent-14.png" alt="" height={'300px'} className='mx-5' />
       <img src="https://pngfre.com/wp-content/uploads/wanda-maximoff-11-573x1024.png" alt=""  height={'300px'} className='mx-5'/></div>
       
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex justify-content-center align-items-between'>
       <img src="http://img07.deviantart.net/65b5/i/2016/086/5/9/buckycap_by_cptcommunist-d9wqwq7.png" alt=""  height={'300px'} className='mx-5'/>
       <img src="https://www.transparentpng.com/thumb/deadpool/real-deadpool-clipart-png-DRdkHU.png" alt="" height={'300px'} className='mx-5' />
       <img src="https://www.pngplay.com/wp-content/uploads/6/Marvel-Black-Panther-PNG-HD-Quality.png" alt=""  height={'300px'} className='mx-5'/></div>
       
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Slider