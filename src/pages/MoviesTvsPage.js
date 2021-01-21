import { useEffect, useState } from 'react'
import { getData } from '../utils/request'
import FilmItem from '../components/Movie&TvItems'
import Pagination from '../components/Pagination'
import { Card } from 'semantic-ui-react'

export const MoviesPage = (props) => {
  const { find, type, history } = props
  const { page } = props.match.params
  const [newPage, setNewPage] = useState(null)
  const [pageNumber, setPageNumber] = useState(page)

  useEffect(() => {
    ;(async () => {
      const data = await getData(find, pageNumber, type)
      setNewPage(data)
    })()
    history.push(`/${type}/${find}/${pageNumber}`)
  }, [find, pageNumber, type, history])

  if (!newPage) {
    return <span>Loading...</span>
  }

  return (
    <div className="main-content">
      <Card.Group>
        {newPage.results.map((info) => (
          <FilmItem info={info} key={info.id} type={type} />
        ))}
      </Card.Group>
      <Pagination setPageNumber={setPageNumber} dataRequest={newPage} />
    </div>
  )
}
