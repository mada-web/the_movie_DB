import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const SearchItem = (props) => {
  const { info, history } = props
  const {
    first_air_date,
    name,
    vote_average,
    known_for = [],
    profile_path,
    poster_path,
    media_type,
    release_date,
    id,
    title,
  } = info

  const baseUrl = 'https://image.tmdb.org/t/p/w500'
  const doneUrl = baseUrl + (poster_path || profile_path)
  const imgNotFound =
    'https://images.squarespace-cdn.com/content/v1/55b8fadfe4b0aedd8fc67803/1548446586462-299X0GYMI6MW7T4ZJG22/ke17ZwdGBToddI8pDm48kJB_XQ3Dc5SllUdWbukQo69Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx6nEhjlnWL4Jp2yRUKnAHfAtKyAEGaEsOmaOT_zZoS2TtcLgPBsTCXYa-xKfKtauE/photo+not+available.jpg'

  const filmedIn = known_for.map((elem) => elem.title || elem.name).join(', ')

  const onClick = () => {
    history.push(`/${media_type}/${id}`)
  }

  return (
    <Card onClick={onClick}>
      <Image src={poster_path || profile_path ? doneUrl : imgNotFound} />
      <Card.Content>
        <Card.Header>{title || name}</Card.Header>
        <Card.Meta>{release_date || first_air_date}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        {filmedIn ? (
          <span> {filmedIn} </span>
        ) : (
          <span>
            <Icon name="heart" />
            Like {vote_average * 10} %
          </span>
        )}
      </Card.Content>
    </Card>
  )
}

export default SearchItem
