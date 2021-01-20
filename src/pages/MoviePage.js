import { useEffect, useState } from 'react'
import { getData } from '../utils/request'
import FilmItem from '../components/FilmItem'
import Pagination from '../components/Pagination'
import { Card } from 'semantic-ui-react'
// import { Loader } from '../components/Preloader'

export const MoviePage = (props) => {
  const { find, type } = props
  const { page } = props.match.params
  const [newPage, setNewPage] = useState(null)
  const [pageNumber, setPageNumber] = useState(page)

  useEffect(() => {
    ;(async () => {
      const data = await getData(find, pageNumber, type)

      setNewPage(data)
    })()
  }, [find, pageNumber, type])

  if (!newPage) {
    return <span>Loading...</span>
  }

  return (
    <div className="main-content">
      <Card.Group>
        {newPage.results.map((info) => (
          <FilmItem info={info} key={info.id} />
        ))}
      </Card.Group>
      <Pagination
        setPageNumber={setPageNumber}
        dataRequest={newPage}
        find={find}
        type={type}
        pageNumber={pageNumber}
      />
    </div>
  )
}
