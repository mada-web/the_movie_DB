import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const PeopleItem = (props) => {
  const { name, profile_path, known_for } = props.info
  const filmedIn = known_for.map((elem) => elem.title).join(', ')

  // const movieTitle  = filmedIn.title

  const baseUrl = 'https://image.tmdb.org/t/p/w500'
  const doneUrl = baseUrl + profile_path

  return (
    <Card>
      <Image src={doneUrl} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{filmedIn}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default PeopleItem
