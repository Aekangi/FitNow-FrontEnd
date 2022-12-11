import React from 'react'

function WorkoutCard({name, duration, difficulty_level, video_url}) {
  return (
    <div>
      <section>
      <video width="320" height="240" controls> <source src={video_url}/></video>
      </section>
      <div>
        <h1>{name}</h1>
        <h3>{duration}</h3>
        <h3>{difficulty_level}</h3>
      </div>
    </div>
  )
}

export default WorkoutCard