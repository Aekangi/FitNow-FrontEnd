import axios from 'axios'
import { useEffect, useState } from 'react'
import WorkoutCard from '../components/WorkoutCard'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../services/Api'

const Workout = () => {
  const [exercises, setExercises] = useState([])

  const getAllWorkoutVideos = async () => {
    const response = await axios.get(`${BASE_URL}/exercises`)
    console.log(response.data)
    setExercises(response.data)
  }

  useEffect(() => {
    getAllWorkoutVideos()
  }, [])

  return (
    <div>
      <h1>Workout Reels</h1>
      <section>
        {exercises?.map((exercise) => (
          <div key={exercise.id}>
            <Link to={`/exercises/${exercise.id}`}>
              <WorkoutCard video={exercise?.video_url} name={exercise?.name} />
            </Link>
            <button>
              <Link to={`/exercises/update_workout/${exercise.id}`}>
                Update Workout
              </Link>
            </button>
          </div>
        ))}
      </section>
      <div>
        <button>
          <Link to={'/exercises/exercise_form'}>Add a Workout Clip</Link>
        </button>
      </div>
    </div>
  )
}

export default Workout
