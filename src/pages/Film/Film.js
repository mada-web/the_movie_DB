import { useData } from './hooks'
import MovieItem from '../../components/SingleMovieItem'

export const MovieSinglePage = (props) => {
  const { type } = props
  const { id } = props.match.params

  const movieData = useData(type, id)
  console.log('🚀 ~ file: Film.js ~ line 8 ~ MovieSinglePage ~ data', movieData)

  if (!movieData) {
    return <span>Loading...</span>
  }

  return (
    <div className="main-content">
      <MovieItem info={movieData} key={movieData.id} />
    </div>
  )
}
