import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../services/Api'

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
    const response = await axios.get(`${BASE_URL}/dietplans/${diet_plan_id}`)
    setFormValues(response.data)
  }

  useEffect(() => {
    getDietPlanDetailsById()
  })

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`${BASE_URL}/dietplans/${diet_plan_id}`, formValues)
    setFormValues(initialForm)
    navigate('/dietplans')
  }

  return (
    <div>
      <h1>Update Diet Plan</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Diet Plan Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formValues.name}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="photo">Image Url</label>
          <input
            type="text"
            name="photo"
            onChange={handleChange}
            value={formValues?.photo}
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
            value={formValues?.diet_type}
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
            value={formValues?.day1}
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
            value={formValues?.day2}
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
            value={formValues?.day3}
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
            value={formValues?.day4}
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
            value={formValues?.day5}
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
            value={formValues?.day6}
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
            value={formValues?.day7}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Update Diet Plan</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateDietPlan
