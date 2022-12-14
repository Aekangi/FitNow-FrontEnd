import { useEffect, useState } from 'react'
import DietPlanCard from '../components/DietPlanCard'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../services/Api'
import '../styling/dietplan.css'
import Client from '../services/Api'

const DietPlan = () => {
  const [dietPlans, setDietPlans] = useState([])

  const getDietPlan = async () => {
    const response = await Client.get(`${BASE_URL}/dietplans`)
    setDietPlans(response.data)
  }

  useEffect(() => {
    getDietPlan()
  }, [])

  return (
    <div className="dietPlan">
      <h1 className="healthslongs">Just for the Health of it!</h1>
      <section className="dietPlanArray">
        {dietPlans?.map((dietPlan) => (
          <div key={dietPlan.id}>
            <Link to={`/dietplans/${dietPlan.id}`}>
              <DietPlanCard photo={dietPlan?.photo} name={dietPlan?.name} />
            </Link>
            <button className="update">
              <Link to={`/dietplans/update_diet_plan/${dietPlan.id}`}>
                Update Diet Plan
              </Link>
            </button>
          </div>
        ))}
      </section>
      <div>
        <button className="add">
          <Link to={'/dietplans/diet_plan_form'}>Add a Diet Plan </Link>
        </button>
      </div>
    </div>
  )
}

export default DietPlan
