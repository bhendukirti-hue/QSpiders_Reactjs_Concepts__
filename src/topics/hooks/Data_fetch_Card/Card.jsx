import React from 'react'

const Card = ({data}) => {    
  return (
    <div className='card'>
      <img src={data.avatar_url} alt="" />
      <h2>{data.login}</h2>
      <span>{data.id}</span>
      <h3>{data.html_url}</h3>
    </div>
  )
}

export default Card
