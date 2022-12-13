import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/Api'
import '../styling/addDietPage.css'

const AddDietPlan = () => {
  let navigate = useNavigate()
  const initialForm = {
    name: '',
    photo: '',
    diet_type: '',
    day1: '',
    day2: '',
    day3: '',
    day4: '',
    day5: '',
    day6: '',
    day7: ''
  }

  const [formState, setFormState] = useState(initialForm)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post(`${BASE_URL}/dietplans`, formState)
    setFormState(initialForm)
    navigate('/dietplans')
  }

  return (
    <div className="addDietPlan">
      <form onSubmit={handleSubmit}>
        <h1>Add Diet Plan</h1>
        <div>
          <h2>Name</h2>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            value={formState.name}
            required
          ></input>
        </div>
        <div>
          <h2>Image Url</h2>
          <label htmlFor="image"></label>
          <input
            type="text"
            id="photo"
            onChange={handleChange}
            value={formState.image}
            required
          ></input>
        </div>
        <div className="dietDecription">
          <h2>Diet Description</h2>
          <label htmlFor="diet_type"></label>
          <textarea
            id="diet_type"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formState.diet_type}
            required
          ></textarea>
        </div>
        <div className="days">
          <div>
            <h2>Monday</h2>
            <label htmlFor="day1"></label>
            <textarea
              id="day1"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formState.day1}
              required
            ></textarea>
          </div>
          <div>
            <h2>Tuesday</h2>
            <label htmlFor="day2"></label>
            <textarea
              id="day2"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formState.day2}
              required
            ></textarea>
          </div>{' '}
          <div>
            <h2>Wednesday</h2>
            <label htmlFor="day3"></label>
            <textarea
              id="day3"
              onChange={handleChange}
              value={formState.day3}
              required
            ></textarea>
          </div>
        </div>
        <div className="days">
          <div>
            <h2>Thursday</h2>
            <label htmlFor="day4"></label>
            <textarea
              id="day4"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formState.day4}
              required
            ></textarea>
          </div>
          <div>
            <h2>Friday</h2>
            <label htmlFor="day5"></label>
            <textarea
              id="day5"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formState.day5}
              required
            ></textarea>
          </div>
          <div>
            <h2>Saturday</h2>
            <label htmlFor="day6"></label>
            <textarea
              id="day6"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formState.day6}
              required
            ></textarea>
          </div>{' '}
          <div>
            <h2>Sunday</h2>
            <label htmlFor="day7"></label>
            <textarea
              id="day7"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formState.day7}
              required
            ></textarea>
          </div>
        </div>
        <div className="submitPlan">
          <button type="submit">Add Diet Plan</button>
        </div>
      </form>
    </div>
  )
}

export default AddDietPlan
