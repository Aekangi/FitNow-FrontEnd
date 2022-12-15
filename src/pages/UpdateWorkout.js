import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Client from '../services/Api'
import '../styling/addworkout.css'

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
    const response = await Client.get(`/exercises/${exercise_id}`)
    setFormValues(response.data)
  }
  useEffect(() => {
    WorkoutDetailsById()
  }, [])

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    Client.put(`/exercises/${exercise_id}`, formValues)
    setFormValues(initialForm)
    navigate('/exercises')
  }

  return (
    <div className="addWo">
      <form onSubmit={handleSubmit}>
        <h1 className="woname">Add a WorkOut Reel</h1>
        <div>
          <h2>Workout Name</h2>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            placeholder="how to posture your back...?"
            onChange={handleChange}
            value={formValues.name}
            required
          ></input>
        </div>
        <div>
          <h2>Video Url</h2>
          <label htmlFor="video_url"></label>
          <input
            type="text"
            name="video_url"
            onChange={handleChange}
            placeholder="www.vidoclip.com"
            value={formValues.video_url}
            required
          ></input>
        </div>
        <div>
          <h2>Duration </h2>
          <label htmlFor="duration"></label>
          <input
            type="text"
            name="duration"
            onChange={handleChange}
            placeholder="10sec"
            value={formValues.duration}
            required
          ></input>
        </div>
        <div>
          <h2>Difficulty Level</h2>
          <label htmlFor="difficulty_level"> </label>
          <input
            type="text"
            name="difficulty_level"
            onChange={handleChange}
            placeholder="from 1-10"
            value={formValues.difficulty_level}
            required
          ></input>
        </div>
        <div className="submitWo">
          <button type="submit">Update Workout Reel</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateWorkout
