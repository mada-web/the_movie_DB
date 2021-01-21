import React from 'react'
import { Button, Icon, Item as SemanticItem, Label } from 'semantic-ui-react'

const MovieItem = (props) => {
  const {
    // id,
    // backdrop_path,
    status,
    episode_run_time,
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

  const baseUrl = 'https://image.tmdb.org/t/p/w500'
  const doneUrl = baseUrl + poster_path
  const imgNotFound =
    'https://lh3.googleusercontent.com/proxy/seQgwbueiq4uxC8lFaY653o3BuqW61R_9eyu4e2jhWcX3GkURdhQWMRWQoH-ssZqTNI63noiaM7TrF1b8KTCdVVwi8NE_ZtG2cJgYzrtww'

  // const backgroundImageUrl = baseUrl + backdrop_path
  // const divStyle = {
  //   color: 'black',
  //   backgroundImage: `url(${backgroundImageUrl})`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  // }
  return (
    <SemanticItem>
      <SemanticItem.Image
        src={poster_path ? doneUrl : imgNotFound}
        // style={divStyle}
      />

      <SemanticItem.Content>
        <SemanticItem.Header>{title}</SemanticItem.Header>
        <SemanticItem.Meta>
          <span className="cinema">{tagline}</span>
        </SemanticItem.Meta>
        <SemanticItem.Description>
          Realease Date: {release_date ? release_date : first_air_date}
        </SemanticItem.Description>
        <SemanticItem.Description>
          Genres: {movieGenres}
        </SemanticItem.Description>
        <SemanticItem.Description>
          Overview: {overview}
        </SemanticItem.Description>
        <SemanticItem.Extra>
          <Label>{runtime ? runtime : episode_run_time[0]} min</Label>
          <Label icon="heart" content={vote_average} />
          <SemanticItem.Description>Status: {status}</SemanticItem.Description>
          <SemanticItem.Description>
            Original language: {original_language}
          </SemanticItem.Description>
          <SemanticItem.Description>
            {budget ? (
              <span>
                Budget:{' '}
                {budget.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} $)
              </span>
            ) : (
              <span>Seasons: {seasons.length} </span>
            )}
          </SemanticItem.Description>
          {/* seasons */}
          <SemanticItem.Description>
            {revenue ? (
              <span>
                Revenue:{' '}
                {revenue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}{' '}
                $)
              </span>
            ) : (
              <span>Creator: {created_by[0].name} </span>
            )}
          </SemanticItem.Description>

          <Button primary floated="left">
            <a style={{ color: 'white' }} href={homepage}>
              Homepage
            </a>
            <Icon name="right chevron" />
          </Button>
        </SemanticItem.Extra>
      </SemanticItem.Content>
    </SemanticItem>
  )
}

export default MovieItem
