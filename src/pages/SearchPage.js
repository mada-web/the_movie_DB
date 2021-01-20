import { useEffect, useState } from 'react'
import { getData } from '../utils/request'
import SearchItem from '../components/SearchItem'
import Pagination from '../components/Pagination'
import { Card } from 'semantic-ui-react'
// import { Loader } from '../components/Preloader'

export const SearchPage = (props) => {
  const { find, type } = props
  const { input } = props.match.params
  const [newPage, setNewPage] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    ;(async () => {
      const data = await getData(find, pageNumber, type, input)

      setNewPage(data)
    })()
  }, [find, pageNumber, type, input])

  if (!newPage) {
    return <span>Loading...</span>
  }
  return (
    <div className="main-content">
      <Card.Group>
        {newPage.results.map((info) => (
          <SearchItem info={info} key={info.id} />
        ))}
      </Card.Group>
      <Pagination setPageNumber={setPageNumber} dataRequest={newPage} />
    </div>
  )
}
