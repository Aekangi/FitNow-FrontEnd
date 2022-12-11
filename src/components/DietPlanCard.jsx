

const DietPlanCard = ({photo, name, diet_type, day1, day2, day3, day4, day5, day6, day7}) => {
  return (
    <div>
      <section>
        <img src={photo}/>
      </section>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <h2>{diet_type}</h2>
      </div>
      <div>
        <h3>{day1}</h3>
        <h3>{day2}</h3>
        <h3>{day3}</h3>
        <h3>{day4}</h3>
        <h3>{day5}</h3>
        <h3>{day6}</h3>
        <h3>{day7}</h3>
      </div>
    </div>
  )
}

export default DietPlanCard