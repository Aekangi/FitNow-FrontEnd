import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../services/Api'
import Client from '../services/Api'

const WorkoutDetails = () => {
  let { exercise_id } = useParams()
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
    <div>
      {workoutDetails.name}
      <section>
        <video controls>
          <source src={workoutDetails.video_url} />
        </video>
      </section>
      <div>
        <h3>Durations: {workoutDetails.duration}</h3>
        <h3>Difficulty Level: {workoutDetails.difficulty_level}</h3>
      </div>
      <div>
        <button onClick={() => deleteWorkout()}>Delete Workout</button>
      </div>
    </div>
  ) : (
    <div>'Workout with such ID does not exist.'</div>
  )
}

export default WorkoutDetails
