import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Col, Row } from 'react-bootstrap'
import { grievanceApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function GrievancePage() {

  const [grievanceDetails, setGrievanceDetails] = useState({
    username: "",
    email: "",
    phone: "",
    issue: ""
  })
  // console.log(grievanceDetails);
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { username, email, phone, issue } = grievanceDetails
    //  /   console.log(grievanceDetails);
    if (!username || !email || !phone || !issue) {

      alert('plz fill the form completely')
    }
    else {
    let time=new Date()
    let timeStamp=new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
    console.log(timeStamp);
    const reqBody ={
      username,email,phone,issue,timeStamp
    }
      const result = await grievanceApi(reqBody)
      //  console.log(result);
      if (result.status == 200) {

        toast.success('Submitted Successfully')

      }
      else {
        toast.error('Something went wrong plz try after some time')
      }
    }

  }

  return (
    <>
    
      <div className='grievance-form' style={{ height: '100vh' }}  >
        <Header />
        <div className=' d-flex align-items-center justify-content-center flex-column mt-4'>
          <h1 className='mt-5 text-light'>Grievance Form Page</h1>
          <Row className='w-100 mt-3'>
            <Col sm={12} md={1}></Col>
            <Col sm={12} md={10}>
              <form className=' gform d-flex align-items-center justify-content-center rounded p-4 flex-column  mb-5 shadow' >
                <div className='w-100 d-flex align-items-center justify-content-center mt-3'>
                  <input type="text" placeholder='Your Name' className='form-control w-75 mb-3' onChange={(e) => setGrievanceDetails({ ...grievanceDetails, username: e.target.value })} />
                </div>

                <div className='w-100 d-flex align-items-center justify-content-center'>
                  <input type="email" placeholder='Email ' className='form-control w-75 mb-3' onChange={(e) => setGrievanceDetails({ ...grievanceDetails, email: e.target.value })} />
                </div>
                <div className='w-100 d-flex align-items-center justify-content-center'>
                  <input type="text" placeholder='Contact Number ' className='form-control w-75 mb-3' onChange={(e) => setGrievanceDetails({ ...grievanceDetails, phone: e.target.value })} />
                </div>
                <div className='w-100 d-flex align-items-center justify-content-center'>
                  <textarea placeholder='Isssue Description ' className='form-control w-75 mb-3' row={5} onChange={(e) => setGrievanceDetails({ ...grievanceDetails, issue: e.target.value })} />
                </div>

                <button className='btn btn-outline-danger w-25 fs-4' onClick={handleSubmit}>Submit</button>
              </form>
            </Col>
            <Col sm={12} md={1}></Col>
          </Row>
        </div>
        <Footer /> 
      </div>
      <ToastContainer position='top-center' theme='colored' />
    </>
  )
}

export default GrievancePage