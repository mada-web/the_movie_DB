import { useEffect, useState } from 'react'
import { getData } from '../utils/request'
import PeopleCard from '../components/PeopleCards'
import Pagination from '../components/Pagination'
import { Card } from 'semantic-ui-react'
// import { Loader } from '../components/Preloader'

export const PeoplesPage = (props) => {
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
          <PeopleCard info={info} key={info.id} type={type} />
        ))}
      </Card.Group>
      <Pagination setPageNumber={setPageNumber} dataRequest={newPage} />
    </div>
  )
}
