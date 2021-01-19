import { useEffect, useState } from 'react'
import { getData } from '../utils/dataRequest'
import PeopleCard from '../components/PeopleCard'
import Pagination from '../components/Pagination'
import { Card } from 'semantic-ui-react'
// import { Loader } from '../components/Preloader'

export const PeoplePage = (props) => {
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
          <PeopleCard info={info} key={info.id} />
        ))}
      </Card.Group>
      <Pagination setPageNumber={setPageNumber} />
    </div>
  )
}
