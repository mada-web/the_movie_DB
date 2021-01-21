import { useEffect, useState } from 'react'
import { getMovData } from '../utils/getMovData'
import MovieItem from '../components/SingleMovieItem'

export const TvSinglePage = (props) => {
  const { type } = props
  const { id } = props.match.params
  const [newPage, setNewPage] = useState(null)

  useEffect(() => {
    ;(async () => {
      const data = await getMovData(id, type)
      setNewPage(data)
    })()
  }, [id, type])

  if (!newPage) {
    return <span>Loading...</span>
  }

  return (
    <div className="main-content">
      <MovieItem info={newPage} key={newPage.id} />
    </div>
  )
}
