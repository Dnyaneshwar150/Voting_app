import React, { useState } from 'react'
import './Registration.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../store/auth'
import { BASE_URL } from '../../service'
import { toast } from 'react-toastify'
// import register_Image from '../../assets/register_vote_image.png';

const Registration = () => {
      const navigate = useNavigate()
      const {storeTokenInLS} = useAuth()

      const [formData, setFormData] = useState({
            name: "",
            age: "",
            mobile: "",
            email: "",
            password: "",
            address: "",
            aadharCardNumber: "",
      })
      const changeHandler = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value })
      }

      const register = async () => {
            let responseData;
            await fetch(`${BASE_URL}/api/v1/users/signup`, {
                  method: "POST",
                  headers: {
                        Accepts: 'application/form-data',
                        'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData)
            }).then((res) => res.json()).then((data) => responseData = data)

            if (responseData.success) {
                  toast.success('Registration Successful')
                  console.log(responseData)
                  storeTokenInLS(responseData.token)
                  navigate('/login')
            } else {
                  toast.error(responseData.errors)
            }
      }
      return (
            <div className='register'>
                  <div className="register-container">
                        <div className="image-holder"></div>
                        <div className='form'>
                              <h2><strong>Register for Vote</strong></h2>
                              <input className='form-control' name='name' value={formData.name} onChange={changeHandler} type="text" placeholder=' Enter Your Name' />
                              <input className='form-control' name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
                              <input className='form-control' name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
                              <input className='form-control' name='age' value={formData.age} onChange={changeHandler} type="text" placeholder='age' />
                              <input className='form-control' name='address' value={formData.address} onChange={changeHandler} type="text" placeholder='Address' />
                              <input className='form-control' name='aadharCardNumber' value={formData.aadharCardNumber} onChange={changeHandler} type="text" placeholder='Aadhar Number' />
                              <input className='form-control' name='mobile' value={formData.mobile} onChange={changeHandler} type="text" placeholder='Contact Number' />
                              <button className='btn' onClick={register}>Continue</button>
                              <h2 className='already'>Already have an account? <span><Link to="/login">Login here</Link></span></h2>
                        </div>
                  </div>
            </div>

      )
}

export default Registration
