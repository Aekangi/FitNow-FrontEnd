import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/Api'

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Diet Plan Name</label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            value={formState.name}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="image">Image url</label>
          <input
            type="text"
            id="photo"
            onChange={handleChange}
            value={formState.image}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="diet_type">Diet Description</label>
          <textarea
            id="diet_type"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formState.directions}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="day1">DAY 1</label>
          <textarea
            id="day1"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formState.directions}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="day2">DAY 2</label>
          <textarea
            id="day2"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formState.directions}
            required
          ></textarea>
        </div>{' '}
        <div>
          <label htmlFor="day3">DAY 3</label>
          <textarea
            id="day3"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formState.directions}
            required
          ></textarea>
        </div>{' '}
        <div>
          <label htmlFor="day4">DAY 4</label>
          <textarea
            id="day4"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formState.directions}
            required
          ></textarea>
        </div>{' '}
        <div>
          <label htmlFor="day5">DAY 5</label>
          <textarea
            id="day5"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formState.directions}
            required
          ></textarea>
        </div>{' '}
        <div>
          <label htmlFor="day6">DAY 6</label>
          <textarea
            id="day6"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formState.directions}
            required
          ></textarea>
        </div>{' '}
        <div>
          <label htmlFor="day7">DAY 7</label>
          <textarea
            id="day7"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formState.directions}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Add Diet Plan</button>
        </div>
      </form>
    </div>
  )
}

export default AddDietPlan
