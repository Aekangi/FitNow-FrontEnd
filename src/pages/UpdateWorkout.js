import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../services/Api'

const UpdateWorkout = () => {
  let { exercise_id } = useParams()
  let navigate = useNavigate()
  const initialForm = {
    name: '',
    duration: '',
    difficulty_level: '',
    video_url: ''
  }

  const [formValues, setFormValues] = useState(initialForm)
  const WorkoutDetailsById = async () => {
    const response = await axios.get(`${BASE_URL}/exercises/${exercise_id}`)
    setFormValues(response.data)
  }
  useEffect(() => {
    WorkoutDetailsById()
  })

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`${BASE_URL}/exercises/${exercise_id}`, formValues)
    setFormValues(initialForm)
    navigate('/exercises')
  }

  return (
    <div>
      <h1>Update WorkOut Clip</h1>
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
          <label htmlFor="video_url">Video Url</label>
          <input
            type="text"
            name="video_url"
            onChange={handleChange}
            value={formValues.video_url}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="duration">Duration </label>
          <input
            type="text"
            name="duration"
            onChange={handleChange}
            value={formValues.duration}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="difficulty_level">Difficulty Level </label>
          <input
            type="text"
            name="difficulty_level"
            onChange={handleChange}
            placeholder="from 1-10"
            value={formValues.difficulty_level}
            required
          ></input>
        </div>
        <div>
          <button type="submit">Update Workout Clip</button>
        </div>
      </form>
    </div>
  )
}
export default UpdateWorkout
