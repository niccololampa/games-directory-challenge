import React from "react"
import { useNavigate } from "react-router-dom"
import { Backdrop, Box, Modal, Fade } from "@mui/material"
import {
  ColoredButton,
  LiveGameInfoText,
  GameGenreText,
  GameNameText,
  GameDescText,
  ImageCarousel,
  GameOSInfo,
  NFTSDisplay,
} from "../../components"
import {
  ModalStyle,
  StyledSlideShowBox,
  StyledVideoBox,
  StyledPlayTrailerText,
  StyledInfoBox,
  StyledLearnMoreBox,
  StyledLiveGenreBox,
  StyledPlayArrowIcon,
  StyledCloseIconButton,
  StyledCloseIcon,
} from "./GameModalStyled"

import type { GameInfo } from "../../types"

// can't use styled due to "position" key typing error.
const GameModal = ({
  visible,
  gameInfo,
  handleClose,
}: {
  visible: boolean
  gameInfo: GameInfo
  handleClose: () => void
}) => {
  const { id, gameName, live, shortDesc, genres, videoThumb, os, nfts, slideShowImages } = gameInfo
  const navigate = useNavigate()

  const handleLearnMore = () => {
    navigate(id)
  }

  if (!visible) {
    return <></>
  }

  return (
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
        <Box sx={ModalStyle}>
          <StyledCloseIconButton onClick={handleClose}>
            <StyledCloseIcon />
          </StyledCloseIconButton>
          <StyledSlideShowBox>
            {nfts && <NFTSDisplay />}
            <GameOSInfo os={os} size={20} color="#fff" />
            <ImageCarousel images={slideShowImages} />
          </StyledSlideShowBox>
          <StyledVideoBox backgroundimage={videoThumb}>
            <StyledPlayArrowIcon />
            <StyledPlayTrailerText>Play Trailer</StyledPlayTrailerText>
          </StyledVideoBox>
          <StyledInfoBox>
            <StyledLiveGenreBox>
              <LiveGameInfoText live={live ? true : false} />
              {genres.map((genre, index) => (
                <GameGenreText key={index} genre={genre} fontWeight="bold" />
              ))}
            </StyledLiveGenreBox>
            <GameNameText gameName={gameName} />
            <GameDescText description={shortDesc} fontSize="12px" />
          </StyledInfoBox>
          <StyledLearnMoreBox>
            <ColoredButton
              text="Learn More"
              handleClick={handleLearnMore}
              backColor="#eeeea5"
              backColorHover="#f7f7d4"
              textColor="#000000"
            />
          </StyledLearnMoreBox>
        </Box>
      </Fade>
    </Modal>
  )
}

export default GameModal
