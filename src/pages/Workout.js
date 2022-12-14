import { useEffect, useState } from 'react'
import WorkoutCard from '../components/WorkoutCard'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../services/Api'
import '../styling/workout.css'
import Client from '../services/Api'

const Workout = () => {
  const [exercises, setExercises] = useState([])

  const getAllWorkoutVideos = async () => {
    const response = await Client.get(`${BASE_URL}/exercises`)
    console.log(response.data)
    setExercises(response.data)
  }

  useEffect(() => {
    getAllWorkoutVideos()
  }, [])

  return (
    <div className="workout">
      <h1 className="pick1">Lets start living healthy today...</h1>
      <section className="workoutArray">
        {exercises?.map((exercise) => (
          <div key={exercise.id}>
            <Link to={`/exercises/${exercise.id}`} state={exercise.video_url}>
              <WorkoutCard
                video_url={exercise?.video_url}
                name={exercise?.name}
              />
            </Link>
            <button className="update">
              <Link to={`/exercises/update_workout/${exercise.id}`}>
                Update Workout
              </Link>
            </button>
          </div>
        ))}
      </section>
      <div>
        <button className="add">
          <Link to={'/exercises/exercise_form'}>Add a Workout Reel</Link>
        </button>
      </div>
    </div>
  )
}

export default Workout
