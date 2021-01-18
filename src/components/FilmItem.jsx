import React from 'react'
import { Item as ItemSemantic } from 'semantic-ui-react'

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
    id,
    poster_path,
    release_date,
    runtime,
    tagline,
    title,
  } = props.info
  console.log(
    '🚀 ~ file: FilmItem.jsx ~ line 23 ~ Item ~ props.info',
    props.info
  )

  const baseUrl = 'https://image.tmdb.org/t/p/w500'
  const items = [
    {
      childKey: id,
      image: `${baseUrl}${poster_path}`,
      header: title,
      description: tagline,
      meta: release_date,
      extra: `${runtime} min`,
    },
    // {
    //   childKey: 1,
    //   image: '/images/wireframe/image.png',
    //   header: 'Header',
    //   description: 'Description',
    //   meta: 'Metadata',
    //   extra: 'Extra',
    // },
  ]
  return <ItemSemantic.Group items={items} />
}

export default Item
