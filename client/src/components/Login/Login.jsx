import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../store/auth'
import { BASE_URL } from '../../service'
import { toast } from 'react-toastify'

const Login = () => {

  const {storeTokenInLS} = useAuth()

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    password: "",
    aadharCardNumber: "",
    role:"voter"
  })

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async () => {
    let responseData;
    await fetch(`${BASE_URL}/api/v1/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }).then((res) => res.json()).then((data) => responseData = data)

    if (responseData.success) {
      if(formData.role === 'admin'){
        toast.success('Login successful')
        storeTokenInLS(responseData.token)
        navigate('/admin')
      }else{
        toast.success('Login successful')
        storeTokenInLS(responseData.token)
        navigate('/voter')
      }
    } else {
      toast.error('Login failed,Please check your credentials.')
    }
  }

  return (
    <div className='login'>
      <div className="login-container">
        <div className="image-holder"></div>
        <div className='form'>
          <h2><strong>Login</strong></h2>
          <input className='form-control' name='aadharCardNumber' value={formData.aadharCardNumber} onChange={changeHandler} type="text" placeholder='Aadhar Number' />
          <input className='form-control' name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
          <select value={formData.role} onChange={changeHandler} className='select' name="role" >
            <option value="voter">Voter</option>
            <option value="admin">Admin</option>
          </select><br />
          <button className='btn' onClick={login}>Continue</button>
          <h2 className='already'>Create an account? <span><Link to="/register">Register</Link></span></h2>
        </div>
      </div>
    </div>
  )
}

export default Login