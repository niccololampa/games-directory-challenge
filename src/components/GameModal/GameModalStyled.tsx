import { styled } from "@mui/material/styles"
import { Box, Typography, IconButton } from "@mui/material"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import CloseIcon from "@mui/icons-material/Close"

export const ModalStyle = {
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
  zIndex: 10,
}

export const StyledSlideShowBox = styled(Box)({
  gridArea: "1 / 1 / 1 / 3",
  position: "relative",
  backgroundColor: "#3f3f3f",
  borderRadius: "5%",
})

export const StyledVideoBox = styled(Box)(({ backgroundimage }: { backgroundimage: string }) => ({
  gridArea: "2 / 1 / 3 / 2",
  backgroundImage: `url(${backgroundimage})`,
  backgroundColor: "#3f3f3f",
  borderRadius: "5%",
  border: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  cursor: "pointer",
}))

export const StyledPlayTrailerText = styled(Typography)({
  color: "#fff",
  fontSize: "12px",
  fontWeight: "bold",
})

export const StyledInfoBox = styled(Box)({ gridArea: "2 / 2 / 3 / 2" })
export const StyledLearnMoreBox = styled(Box)({ gridArea: "3 / 1 / 3 / 3" })

export const StyledLiveGenreBox = styled(Box)({
  display: "flex",
  gap: "8px",
})

export const StyledPlayArrowIcon = styled(PlayArrowIcon)({
  fontSize: "80px",
})

export const StyledCloseIconButton = styled(IconButton)({
  position: "absolute",
  top: -40,
  right: -40,
  color: "#fff",
})

export const StyledCloseIcon = styled(CloseIcon)({
  fontSize: "40px",
})
