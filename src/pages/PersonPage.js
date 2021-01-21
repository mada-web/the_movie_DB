import { useEffect, useState } from 'react'
import { getMovData } from '../utils/getMovData'
import PersonItem from '../components/PersonItem'

export const PersonPage = (props) => {
  const { type } = props
  const { id } = props.match.params
  const [newPage, setNewPage] = useState(null)

  useEffect(() => {
    ;(async () => {
      const data = await getMovData(id, type)
      setNewPage(data)
      console.log('🚀 ~ file: PersonPage.js ~ line 14 ~ ; ~ data', data)
    })()
  }, [id, type])

  if (!newPage) {
    return <span>Loading...</span>
  }

  return (
    <div className="main-content">
      <PersonItem info={newPage} key={newPage.id} />
    </div>
  )
}
