import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/Api'

const AddWorkout = () => {
  let navigate = useNavigate()
  const initialForm = {
    name: '',
    duration: '',
    difficulty_level: '',
    video_url: ''
  }
  const [formState, setFormState] = useState(initialForm)
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post(`${BASE_URL}/exercises`, formState)
    setFormState(initialForm)
    navigate('/exercises')
  }

  return (
    <div>
      <h1>Add WorkOut Clip</h1>
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
          <label htmlFor="video_url">Video Url</label>
          <input
            type="text"
            id="video_url"
            onChange={handleChange}
            value={formState.video_url}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="duration">Duration </label>
          <input
            type="text"
            id="duration"
            onChange={handleChange}
            value={formState.duration}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="difficulty_level">Difficulty Level </label>
          <input
            type="text"
            id="difficulty_level"
            onChange={handleChange}
            placeholder="from 1-10"
            value={formState.difficulty_level}
            required
          ></input>
        </div>
      </form>
    </div>
  )
}

export default AddWorkout
