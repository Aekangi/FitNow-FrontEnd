import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { BASE_URL } from '../services/Api'
import Client from '../services/Api'
import '../styling/detailpg.css'

const WorkoutDetails = () => {
  let { exercise_id } = useParams()
  const { state } = useLocation()
  let navigate = useNavigate()
  const [workoutDetails, setWorkoutDetails] = useState([])

  const getWorkoutDetailsById = async () => {
    const response = await axios.get(`${BASE_URL}/exercises/${exercise_id}`)
    console.log(response)
    setWorkoutDetails(response.data)
  }

  useEffect(() => {
    getWorkoutDetailsById()
  }, [exercise_id])

  const deleteWorkout = async () => {
    await Client.delete(`${BASE_URL}/exercises/${exercise_id}`)
    navigate('/exercises')
  }

  return workoutDetails ? (
    <div className="detailPage">
      <div className="name">{workoutDetails.name}</div>
      <section>
        <iframe
          id="video"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${state}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <div className="detailPageDT">
        <h3>Durations: {workoutDetails.duration}</h3>
        <h3>Difficulty Level: {workoutDetails.difficulty_level}</h3>
      </div>
      <div className="detailPageDelete">
        <button onClick={() => deleteWorkout()}>DELETE DIET PLAN</button>
      </div>
    </div>
  ) : (
    <div>'Workout Reel with such ID does not exist.'</div>
  )
}

export default WorkoutDetails
