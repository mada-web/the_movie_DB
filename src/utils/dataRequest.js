const apiKey = '675b5d7456ae836e379006ead14f14fa'

export const getData = async (find, pageNumber, type) => {
  const url = `https://api.themoviedb.org/3/${type}/${find}?api_key=${apiKey}&page=${pageNumber}`

  try {
    const response = await fetch(url)
    const responseJson = await response.json()

    return responseJson
  } catch (error) {
    console.error('Something went wrong', error)
  }
}
