import React from 'react'

const Title = ({children,color,visibility}) => {
  return (
    <div>

      {
        !visibility ? <div>We cant process the card</div> : <div>
<h3 style={{backgroundColor:`${color}`}}>Card Title</h3>
      {
        children
      }
        </div>
      }
    </div>
  )
}

export default Title
