import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ViewCard = ({data}) => {
  return (
    <Link to={`/${data.id}/view`} state={{data:data}} style={{textDecoration:'none'}}>
      <Card className='text-white bg-dark shadow' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default ViewCard