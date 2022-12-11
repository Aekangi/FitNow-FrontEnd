import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

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
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
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
          <label htmlFor="usernama">Username</label>
          <input
            onChange={handleChange}
            type="text"
            name="username"
            value={formValues.username}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
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
          <label htmlFor="password">Password</label>
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
  )
}

export default SignUp
