import React from 'react'
import '../styling/about.css'

const About = () => {
  return (
    <div className="about">
      <div className="abouth1">
        <h1>FitNow</h1>
        <h2>
          BETTER FOOD <span>&#10003;</span>
        </h2>
        <h2>
          BETTER BODY <span>&#10003;</span>
        </h2>
        <h2>
          BETTER YOU <span>&#10003;</span>
        </h2>
      </div>
      <div className="aboutdesc">
        <p>
          It's time to take control of your health today. After a hard day at
          work, the last thing you want to think about is what to eat and which
          exercises to follow. Well, here on FitNow, we've got you covered!
          FitNow is designed for those individuals that would like to get fit
          through exercises and diet plans. FitNow has well designed dinner
          plans for each day of the week. Think no more and start scrolling
          through the app to see what works for you!
        </p>
      </div>
    </div>
  )
}

export default About
