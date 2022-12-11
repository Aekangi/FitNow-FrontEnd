import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../services/Api'

const WorkoutDetails = () => {
  let { exercise_id } = useParams()
  const [workoutDetails, setWorkoutDetails] = useState([])

  const getWorkoutDetailsById = async () => {
    const response = await axios.get(`${BASE_URL}/exercises/${exercise_id}`)
    console.log(response)
    setWorkoutDetails(response.data)
  }

  useEffect(() => {
    getWorkoutDetailsById()
  }, [exercise_id])

  return workoutDetails ? (
    <div>
      {workoutDetails.name}
      <section>
        <video src={workoutDetails.video_url} />
      </section>
      <div>
        <h3>Durations: {workoutDetails.duration}</h3>
        <h3>{workoutDetails.difficulty_level}</h3>
      </div>
    </div>
  ) : (
    <div>'Hello'</div>
  )
}

export default WorkoutDetails
