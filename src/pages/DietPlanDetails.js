import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../services/Api'
import Client from '../services/Api'
import '../styling/detailpg.css'

function DietPlanDetails() {
  let { diet_plan_id } = useParams()
  let navigate = useNavigate()
  const [dietPlanDetails, setDietPlanDetails] = useState([])
  const [dietPlans, setDietPlans] = useState([])
  const getDietPlan = async () => {
    const response = await axios.get(`${BASE_URL}/dietplans`)
    setDietPlans(response.data)
  }

  useEffect(() => {
    getDietPlan()
  }, [])

  const getDietPlanDetailsById = async () => {
    const response = await axios.get(`${BASE_URL}/dietplans/${diet_plan_id}`)
    setDietPlanDetails(response.data)
  }
  useEffect(() => {
    getDietPlanDetailsById()
  }, [])

  const deleteWorkout = async () => {
    await Client.delete(`${BASE_URL}/dietplans/${diet_plan_id}`)
    navigate('/dietplans')
  }

  return dietPlanDetails ? (
    <div className="detailPage">
      <div className="name">{dietPlanDetails.name}</div>
      <section className="detail">
        <div>
          <img src={dietPlanDetails.photo} alt="diet Plan Image" />
        </div>

        <div className="detailPageDT">
          <h3>{dietPlanDetails.diet_type}</h3>
          <h2>7 Day Diet Plan: </h2>
          <h3>Day 1: {dietPlanDetails.day1}</h3>
          <h3>Day 2: {dietPlanDetails.day2}</h3>
          <h3>Day 3: {dietPlanDetails.day3}</h3>
          <h3>Day 4: {dietPlanDetails.day4}</h3>
          <h3>Day 5: {dietPlanDetails.day5}</h3>
          <h3>Day 6: {dietPlanDetails.day6}</h3>
          <h3>Day 7: {dietPlanDetails.day7}</h3>
        </div>
      </section>
      <div className="detailPageDelete">
        <button onClick={() => deleteWorkout()}>Delete Diet Plan</button>
      </div>
    </div>
  ) : (
    <div>'Diet Plan with such ID does not exist.'</div>
  )
}

export default DietPlanDetails
