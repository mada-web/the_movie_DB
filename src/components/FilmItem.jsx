import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Item = (props) => {
  const {
    first_air_date,
    name,
    vote_average,
    profile_path,
    poster_path,
    release_date,
    runtime,
    tagline,
    title,
  } = props.info

  const baseUrl = 'https://image.tmdb.org/t/p/w500'
  const doneUrl = baseUrl + (poster_path ? poster_path : profile_path)

  return (
    <Card>
      <Image src={doneUrl} />
      <Card.Content>
        <Card.Header>{title ? title : name}</Card.Header>
        <Card.Meta>{release_date ? release_date : first_air_date}</Card.Meta>
        <Card.Description>{tagline}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="heart" />{' '}
        {runtime ? (
          <span> {runtime} min</span>
        ) : (
          <span>Like {vote_average * 10} %</span>
        )}
      </Card.Content>
    </Card>
  )
}

export default Item
