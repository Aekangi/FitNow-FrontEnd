import React from 'react'
import '../styling/addworkout.css'

function WorkoutCard({name, duration, difficulty_level, video_url}) {



  return (
    <div className='wo'>
      <section>
      <img src = {`https://img.youtube.com/vi/${video_url}/maxresdefault.jpg`} />
      </section>
      <div>
        <h1 className='woName'>{name}</h1>
        <h3>{duration}</h3>
        <h3>{difficulty_level}</h3>
      </div>
    </div>
  )
}

export default WorkoutCard