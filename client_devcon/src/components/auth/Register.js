import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2} = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    if(password !== password2) {
      return console.log('Passwords do not match')
    } 
    console.log('SUCCESS')
  }
   
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
        <form
        className="form"
        action="create-profile.html"
        onSubmit={e => onSubmit(e)}
        >
          <div className="form-group">
            <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required />
          </div>
          <div className="form-group">
            <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
            />
            <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
              Gravatar email</small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              minLength="6"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={e => onChange(e)}
              minLength="6"
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
          <p class="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
        </form>
      </section>

    </Fragment>

  )
}

export default Register