import React, { useState } from "react"
import { styled } from "@mui/material/styles"
import { Backdrop, Box, Modal, Fade, Typography } from "@mui/material/"
import { ColoredButton, LiveGameInfoText, GameGenreText } from "../../components"
import type { GameInfo } from "../../types"

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 450,
  bgcolor: "#262626",
  borderRadius: "3%",
  boxShadow: 24,
  p: 4,
}

const GameModal = ({
  visible,
  gameInfo,
  handleClose,
}: {
  visible: boolean
  gameInfo: GameInfo
  handleClose: () => void
}) => {
  const { gameName, image, live, description, genres } = gameInfo

  return (
    <>
      <Modal
        open={visible}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={visible}>
          <Box sx={modalStyle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Test Modal
            </Typography>
            <LiveGameInfoText live={live} />
            {genres.map((genre, index) => (
              <GameGenreText key={index} genre={genre} />
            ))}
            <ColoredButton text="Learn More" />
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default GameModal
