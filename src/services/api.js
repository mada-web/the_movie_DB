const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = '675b5d7456ae836e379006ead14f14fa'

export const request = async (endpoint, method = 'GET', body = {}) => {
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}`
  const params = { method }

  if (method !== 'GET') {
    params.body = JSON.stringify(body)
  }

  const response = await fetch(url, {
    method,
  })

  return response.json()
}
