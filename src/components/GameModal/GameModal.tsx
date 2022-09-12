import React from "react"
import { styled } from "@mui/material/styles"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import { Backdrop, Box, Modal, Fade, Typography } from "@mui/material/"
import {
  ColoredButton,
  LiveGameInfoText,
  GameGenreText,
  GameNameText,
  GameDescText,
  ImageCarousel,
} from "../../components"
import type { GameInfo } from "../../types"

// can't use styled due to "position" key typing error.
const modalStyle = {
  position: "absolute",
  display: "grid",
  gridTemplateRows: "65% 25% 10%",
  gridTemplateColumns: "40% 58%",
  gap: "10px 10px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 490,
  bgcolor: "#262626",
  borderRadius: "3%",
  boxShadow: 24,
  p: 4,
}

const StyledSlideShowBox = styled(Box)({
  gridArea: "1 / 1 / 1 / 3",

  backgroundColor: "#3f3f3f",
  borderRadius: "5%",
})

const StyledVideoBox = styled(Box)(({ backgroundImage }: { backgroundImage: string }) => ({
  gridArea: "2 / 1 / 3 / 2",
  backgroundImage: `url(${backgroundImage})`,
  backgroundColor: "#3f3f3f",
  borderRadius: "5%",
  border: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  cursor: "pointer",
}))

const StyledPlayTrailerText = styled(Typography)({
  color: "#fff",
  fontSize: "12px",
  fontWeight: "bold",
})

const StyledInfoBox = styled(Box)({ gridArea: "2 / 2 / 3 / 2" })
const StyledLearnMoreBox = styled(Box)({ gridArea: "3 / 1 / 3 / 3" })

const StyledLiveGenreBox = styled(Box)({
  display: "flex",
  gap: "8px",
})

const StyledPlayArrowIcon = styled(PlayArrowIcon)({
  fontSize: "80px",
})

const GameModal = ({
  visible,
  gameInfo,
  handleClose,
}: {
  visible: boolean
  gameInfo: GameInfo
  handleClose: () => void
}) => {
  const { gameName, live, description, genres, videoThumb } = gameInfo

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
        <Box sx={modalStyle}>
          <StyledSlideShowBox>
            <ImageCarousel />
          </StyledSlideShowBox>
          <StyledVideoBox backgroundImage={videoThumb}>
            <StyledPlayArrowIcon />
            <StyledPlayTrailerText>Play Trailer</StyledPlayTrailerText>
          </StyledVideoBox>
          <StyledInfoBox>
            <StyledLiveGenreBox>
              <LiveGameInfoText live={live} />
              {genres.map((genre, index) => (
                <GameGenreText key={index} genre={genre} fontWeight="bold" />
              ))}
            </StyledLiveGenreBox>
            <GameNameText gameName={gameName} />
            <GameDescText description={description} />
          </StyledInfoBox>
          <StyledLearnMoreBox>
            <ColoredButton text="Learn More" />
          </StyledLearnMoreBox>
        </Box>
      </Fade>
    </Modal>
  )
}

export default GameModal
