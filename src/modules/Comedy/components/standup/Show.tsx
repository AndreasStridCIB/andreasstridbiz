import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { RED, WHITE, BLACK, LIGHT_BROWN } from "../../utils/constants";

interface ShowProps {
  month: string;
  day: string;
  year: string;
  country: string;
  city: string;
  venue: string;
  showType?: string;
  onBookNow?: () => void;
}

const ShowContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "auto 1fr auto", // date | details | button
  alignItems: "center",
  gap: "24px",
  backgroundColor: RED,
  border: `3px solid ${RED}`,
  borderRadius: "8px",
  padding: "16px",
  margin: "8px 0",
  minHeight: "80px",
  width: "100%",
});

const DateSection = styled(Box)({
  display: "grid",
  gridTemplateRows: "auto auto auto", // month | day | year
  justifyItems: "center",
  alignItems: "center",
  minWidth: "120px",
  textAlign: "center",
  border: `4px solid ${LIGHT_BROWN}`,
  padding: "8px 16px",
});

const ShowDetails = styled(Box)({
  display: "grid",
  gridTemplateRows: "auto auto", // venue info | show type
  alignContent: "center",
  gap: "4px",
});

const BookButton = styled(Button)({
  backgroundColor: LIGHT_BROWN,
  color: BLACK,
  fontWeight: "bold",
  fontSize: "1rem",
  padding: "12px 32px",
  minWidth: "140px",
  borderRadius: "4px",
  textTransform: "uppercase",
  justifySelf: "end", // Align button to the right

  "&:hover": {
    backgroundColor: "#d32f2f",
    transform: "scale(1.05)",
  },

  "&:active": {
    transform: "scale(0.98)",
  },
});

const Show: React.FC<ShowProps> = ({
  month,
  day,
  year,
  country,
  city,
  venue,
  showType,
  onBookNow,
}) => {
  const handleBookNow = () => {
    if (onBookNow) {
      onBookNow();
    } else {
      console.log(`Booking show: ${venue} on ${month} ${day}, ${year}`);
    }
  };

  return (
    <ShowContainer>
      <DateSection>
        <Typography
          variant="body2"
          sx={{
            color: WHITE,
            fontSize: "0.9rem",
            fontWeight: "bold",
            letterSpacing: "0.1em",
          }}
        >
          {month.toUpperCase()}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: LIGHT_BROWN,
            fontSize: "3rem",
            fontWeight: "bold",
            lineHeight: "1",
            margin: "4px 0",
          }}
        >
          {day}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: WHITE,
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          {year}
        </Typography>
      </DateSection>

      <ShowDetails>
        <Typography
          variant="h4"
          sx={{
            color: WHITE,
            fontSize: "1.5rem",
            fontWeight: "bold",
            letterSpacing: "0.05em",
          }}
        >
          {country.toUpperCase()} - {city.toUpperCase()} - {venue.toUpperCase()}
        </Typography>
        {showType && (
          <Typography
            variant="body1"
            sx={{
              color: WHITE,
              fontSize: "1rem",
              opacity: 0.9,
            }}
          >
            {showType}
          </Typography>
        )}
      </ShowDetails>

      <BookButton onClick={handleBookNow}>BOOK NOW</BookButton>
    </ShowContainer>
  );
};

export default Show;
