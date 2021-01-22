import React from 'react'
import Modal from './Modal'
import { getImageUrl } from '../utils/helpers'
import { Button, Icon, Item as SemanticItem, Label } from 'semantic-ui-react'

const MovieItem = (props) => {
  const {
    backdrop_path,
    status,
    episode_run_time,
    videos,
    first_air_date,
    seasons,
    original_language,
    revenue,
    genres,
    homepage,
    budget,
    overview,
    vote_average,
    created_by,
    poster_path,
    release_date,
    runtime,
    tagline,
    title,
  } = props.info

  const movieGenres = genres.map((el) => el.name).join(', ')
  const videosID = videos.results[0].key

  const posterUrl = getImageUrl(poster_path, 'small')
  const imgNotFound =
    'https://lh3.googleusercontent.com/proxy/seQgwbueiq4uxC8lFaY653o3BuqW61R_9eyu4e2jhWcX3GkURdhQWMRWQoH-ssZqTNI63noiaM7TrF1b8KTCdVVwi8NE_ZtG2cJgYzrtww'

  const backgroundImageUrl = getImageUrl(backdrop_path, 'large')

  const divStyle = {
    color: 'black',
    backgroundImage: `linear-gradient( rgba(25, 25, 25, 0.8), rgba(25, 25, 25, 0.8) ), url(${backgroundImageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <SemanticItem className="semantic-item" style={divStyle}>
      <SemanticItem.Image src={poster_path ? posterUrl : imgNotFound} />

      <SemanticItem.Content>
        <SemanticItem.Header>
          <h1>{title}</h1>
        </SemanticItem.Header>
        <SemanticItem.Meta>
          <span className="cinema">{tagline}</span>
        </SemanticItem.Meta>
        <SemanticItem.Description>
          Realease Date: {release_date ? release_date : first_air_date}
        </SemanticItem.Description>
        <SemanticItem.Description>
          Genres: {movieGenres}
        </SemanticItem.Description>
        <SemanticItem.Description className="overview-item">
          <h2>Overview:</h2> <p> {overview}</p>
        </SemanticItem.Description>
        <SemanticItem.Extra>
          <Label>{runtime ? runtime : episode_run_time[0]} min</Label>
          <Label icon="heart" content={vote_average} />
          <SemanticItem.Description>Status: {status}</SemanticItem.Description>
          <SemanticItem.Description>
            Original language: {original_language}
          </SemanticItem.Description>
          <SemanticItem.Description>
            {!!budget && (
              <span>
                Budget:{' '}
                {budget.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} $
              </span>
            )}
            {!!seasons && <span>Seasons: {seasons.length} </span>}
          </SemanticItem.Description>
          <SemanticItem.Description>
            {!!revenue && (
              <span>
                Revenue:{' '}
                {revenue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} $
              </span>
            )}
            {created_by && created_by.length && (
              <span>Creator: {created_by[0].name} </span>
            )}
          </SemanticItem.Description>

          <Button primary floated="left">
            <a style={{ color: 'white' }} href={homepage}>
              Homepage
            </a>
            <Icon name="right chevron" />
          </Button>

          <Modal videosID={videosID} />
        </SemanticItem.Extra>
      </SemanticItem.Content>
    </SemanticItem>
  )
}

export default MovieItem
