import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../services/Api'
import Client from '../services/Api'
import '../styling/addDietPage.css'

const UpdateDietPlan = () => {
  let { diet_plan_id } = useParams()
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
  const [formValues, setFormValues] = useState(initialForm)
  const getDietPlanDetailsById = async () => {
    const response = await Client.get(`/dietplans/${diet_plan_id}`)
    setFormValues(response.data)
  }

  useEffect(() => {
    getDietPlanDetailsById()
  }, [])

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Client.put(`/dietplans/${diet_plan_id}`, formValues)
    setFormValues(initialForm)
    navigate('/dietplans')
  }

  return (
    <div className="addDietPlan">
      <form onSubmit={handleSubmit}>
        <h1>Update Plan</h1>
        <div>
          <h2>Name</h2>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formValues.name}
            required
          ></input>
        </div>
        <div>
          <h2>Image Url</h2>
          <label htmlFor="image"></label>
          <input
            type="text"
            name="photo"
            onChange={handleChange}
            value={formValues.image}
            required
          ></input>
        </div>
        <div className="dietDecription">
          <h2>Diet Description</h2>
          <label htmlFor="diet_type"></label>
          <textarea
            name="diet_type"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formValues.diet_type}
            required
          ></textarea>
        </div>
        <div className="days">
          <div>
            <h2>Monday</h2>
            <label htmlFor="day1"></label>
            <textarea
              name="day1"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formValues.day1}
              required
            ></textarea>
          </div>
          <div>
            <h2>Tuesday</h2>
            <label htmlFor="day2"></label>
            <textarea
              name="day2"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formValues.day2}
              required
            ></textarea>
          </div>{' '}
          <div>
            <h2>Wednesday</h2>
            <label htmlFor="day3"></label>
            <textarea
              iname="day3"
              onChange={handleChange}
              value={formValues.day3}
              required
            ></textarea>
          </div>
        </div>
        <div className="days">
          <div>
            <h2>Thursday</h2>
            <label htmlFor="day4"></label>
            <textarea
              name="day4"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formValues.day4}
              required
            ></textarea>
          </div>
          <div>
            <h2>Friday</h2>
            <label htmlFor="day5"></label>
            <textarea
              name="day5"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formValues.day5}
              required
            ></textarea>
          </div>
          <div>
            <h2>Saturday</h2>
            <label htmlFor="day6"></label>
            <textarea
              name="day6"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formValues.day6}
              required
            ></textarea>
          </div>{' '}
          <div>
            <h2>Sunday</h2>
            <label htmlFor="day7"></label>
            <textarea
              name="day7"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formValues.day7}
              required
            ></textarea>
          </div>
        </div>
        <div className="submitPlan">
          <button type="submit">Update Diet Plan</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateDietPlan
