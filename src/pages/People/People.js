import { useState } from 'react'
import { Card } from 'semantic-ui-react'

import { useData } from './hooks'
import PeopleCard from '../../components/PeopleCards'
import Pagination from '../../components/Pagination'

export const PeoplePage = (props) => {
  const { find, type, history } = props
  const { page } = props.match.params

  const [pageNumber, setPageNumber] = useState(page)
  const { data, totalPages } = useData(type, pageNumber)

  const updatePage = (newPageNumber) => {
    setPageNumber(newPageNumber)
    history.push(`/${type}/${find}/${newPageNumber}`)
  }

  if (!data) {
    return <span>Loading...</span>
  }
  return (
    <div className="main-content">
      <Card.Group>
        {data.map((info) => (
          <PeopleCard history={history} info={info} key={info.id} type={type} />
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
