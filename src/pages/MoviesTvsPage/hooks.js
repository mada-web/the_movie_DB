import { useState, useEffect } from 'react'
import { getMovies } from '../../services/movies'

export const useData = (type, page) => {
  const [data, setData] = useState({})
  
  useEffect(() => {
    const getData = async () => {
      const response = await getMovies(type, page)
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
