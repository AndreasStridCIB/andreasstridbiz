import { IconButton, styled } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const KeyBoardArrowIcon = styled(KeyboardArrowRightIcon)<{
  isOpen: boolean;
  direction: number;
}>(({ theme, direction, isOpen }) => ({
  transform: isOpen
    ? `rotate(${direction}deg)`
    : `rotate(${direction + 180}deg)`,
  fontSize: theme.typography.pxToRem(64),
  transition: "transform 0.3s ease-in-out",
}));

const KeyBoardArrowIconBackground = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.custom.orange,
  borderRadius: "50%",
  width: 52,
  height: 52,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const KeyBoardArrowIconBackgroundAbsolute = styled(KeyBoardArrowIconBackground)(
  ({ theme }) => ({
    padding: theme.spacing(2),
    position: "absolute",
    bottom: theme.spacing(-2.5),
    right: theme.spacing(4),
  })
);

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

export const KeyBoardArrowIconWithBackgroundAbsolute: React.FC<
  KeyBoardArrowIconProps
> = ({ isOpen = false, direction, handleClick }) => {
  return (
    <KeyBoardArrowIconBackgroundAbsolute onClick={handleClick}>
      <KeyBoardArrowIcon isOpen={isOpen} direction={direction} />
    </KeyBoardArrowIconBackgroundAbsolute>
  );
};
