const apiKey = '675b5d7456ae836e379006ead14f14fa'

export const getMovData = async (id, type) => {
  const video = '&append_to_response=videos'
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}${video}`

  try {
    const response = await fetch(url)
    const responseJson = await response.json()

    return responseJson
  } catch (error) {
    console.error('Something went wrong', error)
  }
}
