import { useEffect, useState } from 'react'
import { getData } from '../../utils/request'
import SearchItem from '../../components/SearchItems'
import Pagination from '../../components/Pagination'
import { Card } from 'semantic-ui-react'

export const SearchPage = (props) => {
  const { find, type, history } = props
  const { input, page } = props.match.params
  const [newPage, setNewPage] = useState(null)
  const [pageNumber, setPageNumber] = useState(page)

  useEffect(() => {
    ;(async () => {
      const data = await getData(find, pageNumber, type, input)
      setNewPage(data)
    })()

    history.push(`/${type}/${input}/${pageNumber}`)
  }, [find, pageNumber, type, history, input])

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
