import { useRef, useState } from 'react'
import FilmItem from '../../components/Movie&TvItems'
import Pagination from '../../components/Pagination'
import { Card } from 'semantic-ui-react'

import { useData } from './hooks'

export const MoviesPage = (props) => {
  const { find, type, history } = props
  const { page } = props.match.params

  const [pageNumber, setPageNumber] = useState(page)
  const { data, totalPages } = useData(type, pageNumber)
  const mainContentRef = useRef()

  const updatePage = (newPageNumber) => {
    setPageNumber(newPageNumber)

    history.push(`/${type}/${find}/${newPageNumber}`)
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!data) {
    return <span>Loading...</span>
  }

  return (
    <div className="main-content" ref={mainContentRef}>
      <Card.Group>
        {data.map((info) => (
          <FilmItem history={history} info={info} key={info.id} type={type} />
        ))}
      </Card.Group>
      <Pagination
        setPageNumber={updatePage}
        totalPages={totalPages}
        currentPage={pageNumber}
      />
    </div>
  )
}
