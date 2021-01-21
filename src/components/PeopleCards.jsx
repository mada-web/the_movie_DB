import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'

const PeopleItem = (props) => {
  const { name, profile_path, known_for, id } = props.info
  const { type } = props
  const filmedIn = known_for.map((elem) => elem.title).join(', ')

  const baseUrl = 'https://image.tmdb.org/t/p/w500'
  const doneUrl = baseUrl + profile_path

  return (
    <Link to={`/${type}/${id}`}>
      <Card>
        <Image src={doneUrl} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{filmedIn}</Card.Description>
        </Card.Content>
      </Card>
    </Link>
  )
}

export default PeopleItem
