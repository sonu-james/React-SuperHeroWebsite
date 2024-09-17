import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginApi, registerApi } from '../services/allApi'







function Auth({ register }) {

  const navigate = useNavigate()
  const [userDetatils, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  // console.log(userDetatils);

  const handleRegister = async () => {
    const { username, email, password } = userDetatils
    if (!username || !email || !password) {
      toast.info("plz fill the form completely")
    }
    else {
      const result = await registerApi(userDetatils)
      console.log(result);
      if (result.status == 200) {
        toast.success('Registration successfully')
        navigate('/login')

      }
      else {
        toast.error('Something went wrong plz try after some time')
      }
    }

  }

  const handleLogin = async () => {
    const { email, password } = userDetatils
    if (!email || !password) {
      toast.info('plz fill the form completely')
    }
    else {
      const result = await loginApi({ email, password })
      console.log(result);
      if (result.status == 200) {
        toast.success('login successfully')
        sessionStorage.setItem('existingUser', JSON.stringify(result.data.existingUser))
        sessionStorage.setItem('token', result.data.token)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        setTimeout(() => {
          navigate('/')
        }, 3000)

      }
      else {
        toast.error(result.response.data)
      }
    }
  }
  return (
    <>
      <div className='container-fluid d-flex align-items-center justify-content-center flex-column' style={{ height: '100vh' }}>

        <div className='container w-75'>
          <Link to={'/'} className='text-info fw-bold fs-5' style={{ textDecoration: "none" }}><FontAwesomeIcon icon={faArrowLeft} className='me-3' />Back to Home</Link>
          <div className=' bg-success p-3 mt-2 rounded'>
            <Row>
              <Col sm={12} md={6} className=' p-5 d-flex align-items-center justify-content-center'>
                <img src="https://static-00.iconduck.com/assets.00/unlock-icon-2048x2048-u0zm3geq.png" alt="no image" className='w-75 ' />
              </Col>
              <Col sm={12} md={6} className='d-flex align-items-center justify-content-center  text-center flex-column' >
                <h1 className='text-light'>Super Hero</h1>
                {register ? <h5 className='text-light'>Sign up to your Account</h5> :
                  <h5 className='text-light'>Sign in to your Account</h5>}
                <form className='mt-4 w-75'>
                  {register && <div className='mb-3'>
                    <input type="text" placeholder='Username' className='form-control' onChange={(e) => setUserDetails({ ...userDetatils, username: e.target.value })} />
                  </div>}
                  <div className='mb-3'>
                    <input type="email" placeholder='Email' className='form-control' onChange={(e) => setUserDetails({ ...userDetatils, email: e.target.value })} />
                  </div>
                  <div className='mb-3'>
                    <input type="password" placeholder='Password' className='form-control' onChange={(e) => setUserDetails({ ...userDetatils, password: e.target.value })} />
                  </div>
                  <div className='mb-3'>
                    {register ? <div>
                      <button type='button' className='btn btn-warning w-100 ' onClick={handleRegister}>Register</button>
                      <p className='mt-2 text-light'>Already a User?Click here to<Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }} className='text-danger fw-bold'> Login</Link></p>
                    </div>
                      :
                      <div>
                        <button type='button' className='btn btn-warning w-100' onClick={handleLogin} >Login</button>
                        <p className='mt-2 text-light'>New User?Click here to<Link to={'/register'} style={{ textDecoration: 'none', color: 'white' }} className='text-danger fw-bold'> Register</Link></p>
                      </div>

                    }
                  </div>

                </form>
              </Col>
            </Row>
          </div>
        </div>
        <ToastContainer position='top-center' theme='colored' />
      </div>
    </>
  )
}

export default Auth