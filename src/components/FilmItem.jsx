import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Item = (props) => {
  const {
    // backdrop_path,
    // budget,
    // genres,
    // homepage,
    // imdb_id,
    // overview,
    // popularity,
    // production_companies,
    // production_countries,
    // status,
    // id,
    vote_average,
    poster_path,
    release_date,
    runtime,
    tagline,
    title,
  } = props.info

  const baseUrl = 'https://image.tmdb.org/t/p/w500'
  const doneUrl = baseUrl + poster_path

  return (
    <Card>
      <Image src={doneUrl} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{release_date}</Card.Meta>
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
