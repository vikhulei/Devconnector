import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password} = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    console.log('SUCCESS')
  }
   
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p class="lead"><i class="fas fa-user"></i> Sign Into Your Account</p>
        <form
        className="form"
        action="create-profile.html"
        onSubmit={e => onSubmit(e)}
        >
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
          <input type="submit" className="btn btn-primary" value="Login" />
          <p class="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
        </form>
      </section>

    </Fragment>

  )
}

export default Login