import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

const FilmItem = (props) => {
  const {
    id,
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
  const { type } = props

  const baseUrl = 'https://image.tmdb.org/t/p/w500'
  const doneUrl = baseUrl + (poster_path ? poster_path : profile_path)
  const imgNotFound =
    'https://lh3.googleusercontent.com/proxy/seQgwbueiq4uxC8lFaY653o3BuqW61R_9eyu4e2jhWcX3GkURdhQWMRWQoH-ssZqTNI63noiaM7TrF1b8KTCdVVwi8NE_ZtG2cJgYzrtww'

  return (
    <Link to={`/${type}/${id}`}>
      <Card>
        <Image src={poster_path ? doneUrl : imgNotFound} />
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
    </Link>
  )
}

export default FilmItem