const apiKey = '675b5d7456ae836e379006ead14f14fa'

export const getData = async () => {
  const url = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`

  try {
    const response = await fetch(url)
    const responseJson = await response.json()
    console.log(
      '🚀 ~ file: helper.js ~ line 9 ~ getData ~ responseJson',
      responseJson
    )

    return responseJson
  } catch (error) {
    console.error('Something went wrong', error)
  }
}
