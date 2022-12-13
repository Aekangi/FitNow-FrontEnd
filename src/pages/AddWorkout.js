import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/Api'
import '../styling/addworkout.css'

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
    <div className="addWo">
      <form onSubmit={handleSubmit}>
        <h1 className="woname">Add a WorkOut Reel</h1>
        <div>
          <h2>Diet Plan Name</h2>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            placeholder="how to posture your back...?"
            onChange={handleChange}
            value={formState.name}
            required
          ></input>
        </div>
        <div>
          <h2>Video Url</h2>
          <label htmlFor="video_url"></label>
          <input
            type="text"
            id="video_url"
            onChange={handleChange}
            placeholder="www.vidoclip.com"
            value={formState.video_url}
            required
          ></input>
        </div>
        <div>
          <h2>Duration </h2>
          <label htmlFor="duration"></label>
          <input
            type="text"
            id="duration"
            onChange={handleChange}
            placeholder="10sec"
            value={formState.duration}
            required
          ></input>
        </div>
        <div>
          <h2>Difficulty Level</h2>
          <label htmlFor="difficulty_level"> </label>
          <input
            type="text"
            id="difficulty_level"
            onChange={handleChange}
            placeholder="from 1-10"
            value={formState.difficulty_level}
            required
          ></input>
        </div>
        <div>
          <button type="submit">Add Workout Reel</button>
        </div>
      </form>
    </div>
  )
}

export default AddWorkout
