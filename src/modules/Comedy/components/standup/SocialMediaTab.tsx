import React, { useContext, useState } from "react";
import {
  Alert,
  Box,
  Snackbar,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import { RED, WHITE } from "../../utils/constants";
import { GlobalContext } from "../../../../GlobalContext";
import {
  DURATION,
  StyledMenuItem,
} from "../../../../globalComponents/style/AnimationWrapper";
import { FILLER_HEIGHT } from "../../../CatInBox/utils/constants";

const FBURL = "https://www.facebook.com/profile.php?id=61573616212984";
const IGURL = "https://www.instagram.com/andreasstridcomedy/";
const YTURL = "https://www.youtube.com/@andreasstridcomedy";
const EMAIL = "andreas.strid.comedy@gmail.com";

interface SocialMediaTabProps {
  isContactPage?: boolean;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.body1,
  fontWeight: 900,
  color: WHITE,
}));

const StyledIcon = styled(StyledMenuItem)<{
  disabled?: boolean;
  isContactPage?: boolean;
}>(({ theme, isContactPage }) => ({
  color: WHITE,
  display: isContactPage ? "flex" : "inline-flex",
  alignItems: "center",
  gap: isContactPage ? theme.spacing(2) : 0,
  [theme.breakpoints.down("md")]: {
    height: "48px",
  },
  ...(isContactPage && {
    "&:hover": {
      transform: "none",
      animation: "none",
      "& .MuiTypography-root": {
        color: theme.palette.custom.hoverColor,
        transition: `all ${DURATION} ease-in-out`,
      },
    },
  }),

  "& svg": {
    height: "40px",
    width: "40px",
    [theme.breakpoints.down("md")]: {
      height: "24px",
      width: "24px",
    },
  },
}));

const SocialMediaContainer = styled(Box)<{ isContactPage?: boolean }>(
  ({ theme, isContactPage }) => ({
    display: "grid",
    gridTemplateColumns: isContactPage ? "1fr" : "repeat(4, fit-content(100%))",
    gridTemplateRows: isContactPage ? "repeat(4, fit-content(100%))" : "1fr",
    justifyItems: "start",
    width: "100%",
    height: isContactPage ? "auto" : FILLER_HEIGHT,
    backgroundColor: RED,
    gap: theme.spacing(isContactPage ? 0 : 8),
    paddingLeft: isContactPage ? theme.spacing(4) : theme.spacing(8),

    paddingTop: isContactPage ? theme.spacing(4) : 0,
    paddingBottom: isContactPage ? theme.spacing(4) : 0,
    zIndex: 2,

    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(2),
      gap: theme.spacing(isContactPage ? 0 : 4),
      paddingTop: isContactPage ? theme.spacing(2) : 0,
      paddingBottom: isContactPage ? theme.spacing(2) : 0,
      height: isContactPage ? "auto" : FILLER_HEIGHT / 2,
      justifyContent: "start",
      alignContent: "center",
    },
  })
);

const SocialMediaTab: React.FC<SocialMediaTabProps> = ({
  isContactPage = false,
}) => {
  const { navigateToUrl, openExternalUrl } = useContext(GlobalContext);
  const theme = useTheme();

  const [showCopiedToast, setShowCopiedToast] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setShowCopiedToast(true);
    } catch (error) {
      console.error("Failed to copy email:", error);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = EMAIL;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setShowCopiedToast(true);
    }
  };

  const handleCloseToast = () => {
    setShowCopiedToast(false);
  };

  return (
    <SocialMediaContainer isContactPage={isContactPage}>
      <StyledIcon
        disabled={false}
        isContactPage={isContactPage}
        onClick={() => openExternalUrl(FBURL)}
      >
        <FacebookIcon />
        {isContactPage && (
          <StyledTypography>@andreasstridcomedy</StyledTypography>
        )}
      </StyledIcon>

      <StyledIcon
        disabled={false}
        isContactPage={isContactPage}
        onClick={() => openExternalUrl(IGURL)}
      >
        <InstagramIcon />
        {isContactPage && (
          <StyledTypography>@andreasstridcomedy</StyledTypography>
        )}
      </StyledIcon>

      <StyledIcon
        disabled={false}
        isContactPage={isContactPage}
        onClick={() => openExternalUrl(YTURL)}
      >
        <YouTubeIcon />
        {isContactPage && (
          <StyledTypography>@andreasstridcomedy</StyledTypography>
        )}
      </StyledIcon>

      <Tooltip
        title={isContactPage ? "" : "Click me to copy email"} // No tooltip on contact page
        placement="top"
        arrow
        enterDelay={200}
        leaveDelay={200}
        disableHoverListener={isContactPage} // Disable tooltip on contact page
      >
        <StyledIcon
          disabled={false}
          isContactPage={isContactPage}
          onClick={handleEmailClick}
        >
          <EmailIcon />
          {isContactPage && (
            <StyledTypography>andreas.strid.comedy@gmail.com</StyledTypography>
          )}
        </StyledIcon>
      </Tooltip>

      <Snackbar
        open={showCopiedToast}
        autoHideDuration={2000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseToast}
          severity="success"
          sx={{ width: "100%" }}
        >
          Email: "andreas.strid.comedy@gmail.com" copied!
        </Alert>
      </Snackbar>
    </SocialMediaContainer>
  );
};

export default SocialMediaTab;
