import { useEffect, useState } from 'react'
import { getData } from '../utils/dataRequest'
import Item from '../components/FilmItem'
import Pagination from '../components/Pagination'
import { Card } from 'semantic-ui-react'
// import { Loader } from '../components/Preloader'

export const Page = (props) => {
  const { find } = props
  const [newsList, setNewsList] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    ;(async () => {
      const data = await getData(find, pageNumber)

      setNewsList(data.results)
    })()
  }, [find, pageNumber])

  if (!newsList) {
    return <span>Loading...</span>
  }
  return (
    <div className="main-content">
      <Card.Group>
        {newsList.map((info) => (
          <Item info={info} key={info.id} />
        ))}
      </Card.Group>
      <Pagination setPageNumber={setPageNumber} />
    </div>
  )
}
