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
      <section>
        {dietPlans?.map((dietPlan) => (
          <div key={dietPlan.id}>
            <Link to={`/dietplans/${dietPlan.id}`}>
              <DietPlanCard photo={dietPlan?.photo} name={dietPlan?.name} />
            </Link>
            <button>
              <Link to={`/dietplans/update_diet_plan/${dietPlan.id}`}>
                Update Diet Plan
              </Link>
            </button>
          </div>
        ))}
      </section>
      <div>
        <button>
          <Link to={'/dietplans/diet_plan_form'}>Add a Diet Plan </Link>
        </button>
      </div>
    </div>
  )
}

export default DietPlan
