import React from 'react'
import Card from './Card'
import Title from './Title'

const Hoc = () => {
  return (
    <div>
        <Title color="red" visibility={true}>
            <Card/>
        </Title>
        <hr />
        <Title color="pink" visibility={false}>
        </Title>
        <hr />
        <Title color="green" visibility={true}>
            <Card/>
        </Title>

      
    </div>
  )
}

export default Hoc
