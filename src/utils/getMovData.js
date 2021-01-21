const apiKey = '675b5d7456ae836e379006ead14f14fa'

export const getMovData = async (id, type) => {
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`

  try {
    const response = await fetch(url)
    const responseJson = await response.json()

    return responseJson
  } catch (error) {
    console.error('Something went wrong', error)
  }
}
