const apiKey = '675b5d7456ae836e379006ead14f14fa'

export const getVideoData = async (find, type) => {
  const baseUrl = 'https://api.themoviedb.org/3/'
  const keyUrl = `?api_key=${apiKey}`
  const findUrl = `/${find}`
  const castUrl = '/credits'

  const video = '&append_to_response=videos'

  const url = baseUrl + type + findUrl + castUrl + keyUrl + video

  try {
    const response = await fetch(url)
    const responseJson = await response.json()

    return responseJson
  } catch (error) {
    console.error('Something went wrong', error)
  }
}
