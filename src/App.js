import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Workout from './pages/Workout'
import WorkoutDetails from './pages/WorkoutDetails'
import AddWorkout from './pages/AddWorkout'
import DietPlan from './pages/DietPlan'
import DietPlanDetails from './pages/DietPlanDetails'
import AddDietPlan from './pages/AddDietPlan'
import UpdateDietPlan from './pages/UpdateDietPlan'
import UpdateWorkout from './pages/UpdateWorkout'
import About from './pages/About'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header>
        <Nav
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </header>
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/"
            element={
              <SignIn
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route
            path="/register"
            element={
              <SignUp
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/exercises" element={<Workout />} />
          <Route path="/exercises/:exercise_id" element={<WorkoutDetails />} />
          <Route path="/exercises/exercise_form" element={<AddWorkout />} />
          <Route
            path="/exercises/update_workout/:exercise_id"
            element={<UpdateWorkout />}
          />
          <Route path="/dietplans" element={<DietPlan />} />
          <Route
            path="/dietplans/:diet_plan_id"
            element={<DietPlanDetails />}
          />
          <Route path="/dietplans/diet_plan_form" element={<AddDietPlan />} />
          <Route
            path="/dietplans/update_diet_plan/:diet_plan_id"
            element={<UpdateDietPlan />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
