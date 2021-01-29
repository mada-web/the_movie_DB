import React from 'react'
import FilmItem from './Movie&TvItems'
import { Item as SemanticItem, Card } from 'semantic-ui-react'

const PersonItem = (props) => {
  const { cast, info, history } = props
  const { name, profile_path, birthday, biography, place_of_birth } = info

  const sortCast = cast.results
    .sort((a, b) => (b.vote_average > a.vote_average ? 1 : -1))
    .slice(0, 5)

  const baseUrl = 'https://image.tmdb.org/t/p/w500'
  const doneUrl = baseUrl + profile_path

  return (
    <SemanticItem className="person-item">
      <SemanticItem.Image src={doneUrl} />
      <div className="person-content">
        <SemanticItem.Content>
          <SemanticItem.Header>{name}</SemanticItem.Header>

          <SemanticItem.Meta>
            <span className="cinema">{birthday}</span>
          </SemanticItem.Meta>

          <SemanticItem.Description>
            <h2>Place of birth:</h2> {place_of_birth}
          </SemanticItem.Description>

          <SemanticItem.Description>
            <h2>Biography:</h2>
            {biography}
          </SemanticItem.Description>
        </SemanticItem.Content>
        <div className="cast-cards">
          <Card.Group>
            {sortCast.map((info) => (
              <FilmItem history={history} info={info} key={info.id} />
            ))}
          </Card.Group>
        </div>
      </div>
    </SemanticItem>
  )
}

export default PersonItem
