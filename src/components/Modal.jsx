import React from 'react'
import Video from './Video'
import { Button, Modal as SemanticModal, Icon } from 'semantic-ui-react'

function Modal(props) {
  const { videosID } = props
  const [open, setOpen] = React.useState(false)

  return (
    <SemanticModal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button className="modal-button">
          Play Trailer
          <Icon name="right play" />
        </Button>
      }
    >
      <Video videosID={videosID} />
    </SemanticModal>
  )
}

export default Modal
