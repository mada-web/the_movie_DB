import React from 'react'
import { Item as SemanticItem } from 'semantic-ui-react'

const PersonItem = (props) => {
  const { name, profile_path, birthday, biography, place_of_birth } = props.info

  const baseUrl = 'https://image.tmdb.org/t/p/w500'
  const doneUrl = baseUrl + profile_path

  return (
    <SemanticItem className="person-item">
      <SemanticItem.Image src={doneUrl} />

      <SemanticItem.Content>
        <SemanticItem.Header>{name}</SemanticItem.Header>

        <SemanticItem.Meta>
          <span className="cinema">{birthday}</span>
        </SemanticItem.Meta>

        <SemanticItem.Description>
          Place of birth: {place_of_birth}
        </SemanticItem.Description>

        <SemanticItem.Description>
          Biography: {biography}
        </SemanticItem.Description>
      </SemanticItem.Content>
    </SemanticItem>
  )
}

export default PersonItem
