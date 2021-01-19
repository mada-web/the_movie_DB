import { useEffect, useState } from 'react'
import { getData } from '../utils/dataRequest'
import Item from '../components/FilmItem'
import Pagination from '../components/Pagination'
import { Card } from 'semantic-ui-react'
// import { Loader } from '../components/Preloader'

export const Page = (props) => {
  const { find, type } = props
  const [newList, setNewList] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    ;(async () => {
      const data = await getData(find, pageNumber, type)

      setNewList(data.results)
    })()
  }, [find, pageNumber, type])

  if (!newList) {
    return <span>Loading...</span>
  }
  console.log(newList)
  return (
    <div className="main-content">
      <Card.Group>
        {newList.map((info) => (
          <Item info={info} key={info.id} />
        ))}
      </Card.Group>
      <Pagination setPageNumber={setPageNumber} />
    </div>
  )
}
