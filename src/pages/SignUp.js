import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import '../styling/signup.css'

function SignUp() {
  const navigate = useNavigate()
  const initialFormValues = {
    name: '',
    username: '',
    password: '',
    email: ''
  }

  const [formValues, setFormValues] = useState(initialFormValues)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: formValues.username,
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues({
      name: '',
      username: '',
      email: '',
      password: ''
    })
    navigate('/login')
  }

  return (
    <div classname="signUpPage">
      <div className="signUp">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div>
            <div className="RegloginLabel">
              <label htmlFor="name">Name</label>
            </div>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="John Doe"
              value={formValues.name}
              required
            />
          </div>
          <div>
            <div className="RegloginLabel">
              <label htmlFor="usernama">Username</label>
            </div>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              value={formValues.username}
              required
            />
          </div>
          <div>
            <div className="RegloginLabel">
              <label htmlFor="email">Email</label>
            </div>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div>
            <div className="RegloginLabel">
              <label htmlFor="password">Password</label>
            </div>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
