import { useEffect, useState } from 'react'
import { getData } from './helper'
import Item from '../components/FilmItem'
// import { Loader } from '../components/Preloader'

export const List = () => {
  // const { find } = props
  const [newsList, setNewsList] = useState(null)

  useEffect(() => {
    ;(async () => {
      const data = await getData()

      setNewsList(data)
    })()
  }, [])
  if (!newsList) {
    return <span>Loading...</span>
  }
  return <Item info={newsList} />
}
