const IMAGE_SIZE = {
  large: 'w1920_and_h800_multi_faces',
  small: 'w300',
}

const baseURL = 'https://image.tmdb.org/t/p/'

export const getImageUrl = (imagePath, size) => {
  return `${baseURL}/${IMAGE_SIZE[size]}/${imagePath}`
}
