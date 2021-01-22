import React from 'react'
import { Embed } from 'semantic-ui-react'

const Video = (props) => {
  const { videosID } = props
  return (
    <Embed
      id={videosID}
      placeholder="https://theapprenticeacademy.co.uk/wp-content/uploads/2016/07/godel-technologies.gif"
      source="youtube"
    />
  )
}

export default Video
