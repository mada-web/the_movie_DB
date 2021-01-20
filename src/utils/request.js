const apiKey = '675b5d7456ae836e379006ead14f14fa'

export const getData = async (find, pageNumber, type, input) => {
  const baseUrl = 'https://api.themoviedb.org/3/'
  const pageNumberUrl = `&page=${pageNumber}`
  const searchUrl = `&query=${input}`
  const keyUrl = `?api_key=${apiKey}`
  const findUrl = `/${find}`

  const url =
    baseUrl +
    type +
    findUrl +
    keyUrl +
    (searchUrl ? searchUrl : null) +
    pageNumberUrl

  try {
    const response = await fetch(url)
    const responseJson = await response.json()

    return responseJson
  } catch (error) {
    console.error('Something went wrong', error)
  }
}
