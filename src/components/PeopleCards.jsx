import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const PeopleItem = (props) => {
  const { type, history, info } = props
  const { name, profile_path, known_for, id } = info

  const filmedIn = known_for.map((elem) => elem.title || elem.name).join(', ')

  const baseUrl = 'https://image.tmdb.org/t/p/w500'
  const doneUrl = baseUrl + profile_path

  const onClick = () => {
    history.push(`/${type}/${id}`)
  }

  return (
    <Card onClick={onClick}>
      <Image src={doneUrl} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{filmedIn}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default PeopleItem
