import { useState, useEffect } from 'react'
import { getPerson } from '../../services/getPeople'
import { getCast } from '../../services/getPeople'

export const useData = (id) => {
  const [data, setData] = useState({})

  useEffect(() => {
    const getData = async () => {
      const response = await getPerson(id)
      const cast = await getCast(id)
      const personData = response

      setData({ cast, personData })
    }

    getData()
  }, [id])

  return data
}
