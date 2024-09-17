import React from 'react'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


function PageNotFound() {
  return (
    <>
     <div style={{width:'100%',height:'70vh'}} className='d-flex align-items-center justify-content-center mt-5 flex-column'>
      <img src="https://static.vecteezy.com/system/resources/previews/005/883/254/original/page-not-found-404-error-concept-illustration-free-vector.jpg" alt="no image" width='600px' height='600px' className='mt-5' />
   <Link to='/'><Button variant="outline-success"><FontAwesomeIcon icon={faArrowLeft} className='me-4'/>Back to Home</Button>{' '}</Link>   
    </div>
    </>
  )
}

export default PageNotFound