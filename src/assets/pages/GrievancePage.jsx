import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Col, Row } from 'react-bootstrap'
import { grievanceApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { Link, Navigate } from 'react-router-dom'



function GrievancePage() {

  const [errors, setErrors] = useState({})
  const [token, setToken] = useState('')
  const [grievanceDetails, setGrievanceDetails] = useState({
    username: "",
    email: "",
    phone: "",
    issue: ""
  })

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))

    }
  }, [])
  // console.log(grievanceDetails);
  // console.log(token);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { username, email, phone, issue } = grievanceDetails

    //  /   console.log(grievanceDetails);
    if (!username || !email || !phone || !issue) {
      toast.info('plz fill the form completely')

    }
    else {
      const ValidationError = validateForm(grievanceDetails)
      setErrors(ValidationError)
      if (Object.keys(ValidationError).length == 0) {
        //your Emailjs SERVICE_ID TEMPLATE_ID YOUR_PUBLIC_KEY
        const SERVICE_ID = 'service_tf02cgt';
        const TEMPLATE_ID = 'template_5xbvzha';
        const PUBLIC_KEY = 'A6Cfk3aCQHDu4dXhD';

        //create a new object that contains dynamic template params
        const templateParams = {
          from_name: username,
          from_email: email,
          to_name: 'Super Hero',
          // to_email:'superherolatest@gmail.com',
          issue: issue

        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
          .then((response) => {
            console.log('Email send successfully', response);
          }).catch((error) => {
            console.log("Error sending email", error);

          })


        let time = new Date()
        let timeStamp = new Intl.DateTimeFormat("en-GB", { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(time)
        console.log(timeStamp);
        const reqBody = {
          username, email, phone, issue, timeStamp
        }

        const result = await grievanceApi(reqBody)
        //  console.log(result);
        if (result.status == 200) {
          toast.success('Submitted Successfully') 
         setGrievanceDetails({
          username: "",
          email: "",
          phone: "",
          issue: ""
         })
          

        }
        else {
          toast.error('Something went wrong plz try after some time')
        }
      }
    }


  }

  const validateForm = (data) => {
    let errors = {};
    if (!data.username) {
      errors.username = "username is required"
    }
    if (!data.email) {
      errors.username = "username is required"
    } else if (!validateEmail(data.email)) {
      errors.email = "Invalid Email format"
    }
    if(!data.phone){
      errors.phone = "Contact number is required"
    }else if (!validatePhone(data.phone)) {
      errors.phone = "Invalid  format"
    }

    return errors;
  }

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
    return re.test(email)
  }
  
  const validatePhone = (phone) => {
    const res = /^[0-9\d{10}]*$/
    return res.test(phone)
  }

  const handleReset = () => {
    setGrievanceDetails({
      username: "",
      email: "",
      phone: "",
      issue: ""
    })

  }

 
  return (
    <>
      {token ? <div className='grievance-form' style={{ height: '100vh' }}  >
        <Header />
        <div className=' d-flex align-items-center justify-content-center flex-column mt-4'>
          <h1 className='mt-5 text-light'>Grievance Form Page</h1>
          <Row className='w-100 mt-3'>
            <Col sm={12} md={1}></Col>
            <Col sm={12} md={10}>
              <form className=' gform d-flex align-items-center justify-content-center rounded p-4 flex-column  mb-5 shadow' >
                <div className='w-100 d-flex align-items-center justify-content-center mt-3'>
                  <input type="text" placeholder='Your Name' className='form-control w-75 mb-3' value={grievanceDetails.username} onChange={(e) => setGrievanceDetails({ ...grievanceDetails, username: e.target.value })} />
                  {errors.usename && <span>{errors.username}</span>}
                </div>

                <div className='w-100 d-flex align-items-center justify-content-center flex-column'>
                  <input type="email" placeholder='Email ' className='form-control w-75 mb-3' value={grievanceDetails.email} onChange={(e) => setGrievanceDetails({ ...grievanceDetails, email: e.target.value })} />
                  {errors.email && <span className='text-light'>{errors.email}</span>}
                </div>
                <div className='w-100 d-flex align-items-center justify-content-center flex-column'>
                  <input type="text" placeholder='Contact Number ' className='form-control w-75 mb-3' value={grievanceDetails.phone} onChange={(e) => setGrievanceDetails({ ...grievanceDetails, phone: e.target.value })} />
                  {errors.phone && <span className='text-light'>{errors.phone}</span>}
                </div>
                <div className='w-100 d-flex align-items-center justify-content-center'>
                  <textarea placeholder='Isssue Description ' className='form-control w-75 mb-3' row={5} value={grievanceDetails.issue} onChange={(e) => setGrievanceDetails({ ...grievanceDetails, issue: e.target.value })} />
                </div>

                <div className='w-100 d-flex align-items-center justify-content-center'>
                  <button className='btn btn-outline-danger w-25 fs-4 me-4' onClick={handleSubmit}>Submit</button>
                  <button type='button' className='btn btn-outline-danger w-25 fs-4' onClick={handleReset}>Reset</button>
                </div>
              </form>
            </Col>
            <Col sm={12} md={1}></Col>
          </Row>
        </div>
        <Footer />
      </div> :
        <div style={{ width: '100%' }}>
          <div className="row w-100 ">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex align-items-center justify-contet-center flex-column">
              <img src="https://2.bp.blogspot.com/-WdNReAvdDFM/VrocQdIoHbI/AAAAAAAAR1M/SEBM2vUBMog/s1600/SID_FB_001.gif" alt="no image" width={'300px'} height={'300px'} />
              <h4>Please <Link to={'/login'} style={{ color: 'red' }}>Login </Link>to explore more projects</h4>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>

      }

      <ToastContainer position='top-center' theme='colored' />
    </>
  )
}

export default GrievancePage