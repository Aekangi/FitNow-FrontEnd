import axios from 'axios'
import { useEffect, useState } from 'react'
import DietPlanCard from '../components/DietPlanCard'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../services/Api'

const DietPlan = () => {
  const [dietPlans, setDietPlans] = useState([])

  const getDietPlan = async () => {
    const response = await axios.get(`${BASE_URL}/dietplans`)
    setDietPlans(response.data)
  }

  useEffect(() => {
    getDietPlan()
  }, [])

  return (
    <div>
      <h1>Diet Plans</h1>
    </div>
  )
}

export default DietPlan
