import { useState, useEffect } from 'react'
import { getMovieById } from '../../services/getMovies'

export const useData = (type, id) => {
  const [data, setData] = useState({})

  useEffect(() => {
    const getData = async () => {
      const response = await getMovieById(type, id)

      const movieData = response

      setData(movieData)
    }

    getData()
  }, [type, id])

  return data
}
