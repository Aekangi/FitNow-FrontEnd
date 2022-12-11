import React from 'react'

const DietPlanCard = ({name, photo, diet_type, day1, day2, day3, day4, day5, day6, day7 }) => {
  
  
  return (
    <div>
      <section>
        <img src={photo} alt='Diet Plan Photo'/>
      </section>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <h2>{diet_type}</h2>
      </div>
      <div>
        <h2>7 Day Diet Plan: </h2>
        <h3>Day 1: {day1}</h3>
        <h3>Day 2: {day2}</h3>
        <h3>Day 3: {day3}</h3>
        <h3>Day 4: {day4}</h3>
        <h3>Day 5: {day5}</h3>
        <h3>Day 6: {day6}</h3>
        <h3>Day 7: {day7}</h3>
      </div>
    </div>
  )
}

export default DietPlanCard

