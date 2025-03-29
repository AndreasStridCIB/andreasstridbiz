import { IconButton, styled } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ICON_SIZE = 96;

export const KeyBoardArrowIcon = styled(KeyboardArrowRightIcon)<{
  isOpen: boolean;
  direction: number;
}>(({ theme, direction, isOpen }) => ({
  transform: isOpen
    ? `rotate(${direction}deg)`
    : `rotate(${direction + 180}deg)`,
  width: ICON_SIZE,
  height: ICON_SIZE,

  transition: "transform 0.3s ease-in-out",
}));

const KeyBoardArrowIconBackground = styled(IconButton)(({ theme }) => ({
  justifySelf: "center",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.custom.orange,
  borderRadius: "50%",
  width: ICON_SIZE,
  height: ICON_SIZE,
  marginTop: theme.spacing(2),
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

interface KeyBoardArrowIconProps {
  direction: number;
  isOpen?: boolean;
  handleClick: () => void;
}

export const KeyBoardArrowIconWithBackground: React.FC<
  KeyBoardArrowIconProps
> = ({ isOpen = false, direction, handleClick }) => {
  return (
    <KeyBoardArrowIconBackground onClick={handleClick}>
      <KeyBoardArrowIcon isOpen={isOpen} direction={direction} />
    </KeyBoardArrowIconBackground>
  );
};
