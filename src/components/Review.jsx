import React from 'react'

const Review = ({username, comment}) => {

return(
  <div>
    <h3>{username}</h3>
    <h2>{comment}</h2>
  </div>
)


}
export default Review