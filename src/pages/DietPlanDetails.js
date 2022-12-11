import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../services/Api'

function DietPlanDetails() {
  let { diet_plan_id } = useParams()
  const [dietPlanDetails, setDietPlanDetails] = useState([])

  const getDietPlanDetailsById = async () => {
    const response = await axios.get(`${BASE_URL}/dietplans/${diet_plan_id}`)
    setDietPlanDetails(response.data)
  }
  useEffect(() => {
    getDietPlanDetailsById()
  }, [])

  return dietPlanDetails ? (
    <div>
      <div>{dietPlanDetails.name}</div>
      <div>
        <div>
          <img src={dietPlanDetails.photo} alt="dietPlanImage" />
        </div>
      </div>
      <div>
        <h3>{dietPlanDetails.diet_type}</h3>
      </div>
      <div>
        <h2>7 Day Diet Plan: </h2>
        <h3>Day 1: {dietPlanDetails.day1}</h3>
        <h3>Day 2: {dietPlanDetails.day2}</h3>
        <h3>Day 3: {dietPlanDetails.day3}</h3>
        <h3>Day 4: {dietPlanDetails.day4}</h3>
        <h3>Day 5: {dietPlanDetails.day5}</h3>
        <h3>Day 6: {dietPlanDetails.day6}</h3>
        <h3>Day 7: {dietPlanDetails.day7}</h3>
      </div>
    </div>
  ) : (
    <div>'Diet Plan with such ID does not exist.'</div>
  )
}

export default DietPlanDetails
