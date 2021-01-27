import { useState, useEffect } from 'react'
import { getPeople } from '../../services/getPeople'

export const useData = (type, page) => {
  const [data, setData] = useState({})

  useEffect(() => {
    const getData = async () => {
      const response = await getPeople(type, page)

      const { results, total_pages: totalPages } = response

      setData({
        data: results,
        totalPages,
      })
    }

    getData()
  }, [page, type])

  return data
}
