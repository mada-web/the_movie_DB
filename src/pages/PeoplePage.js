import { useEffect, useState } from 'react'
import { getData } from '../utils/request'
import PeopleCard from '../components/PeopleCard'
import Pagination from '../components/Pagination'
import { Card } from 'semantic-ui-react'
// import { Loader } from '../components/Preloader'

export const PeoplePage = (props) => {
  const { find, type } = props
  const [newPage, setNewPage] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

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
          <PeopleCard info={info} key={info.id} />
        ))}
      </Card.Group>
      <Pagination setPageNumber={setPageNumber} dataRequest={newPage} />
    </div>
  )
}
