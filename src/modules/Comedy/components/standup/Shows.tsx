import React from "react";
import { Box, Typography, useTheme, styled } from "@mui/material";
import { LIGHT_BROWN, RED, WHITE } from "../../utils/constants";
import TitleAnimation from "../../../../globalComponents/TitleAnimation";
import { NAVBAR_HEIGHT } from "../../../CatInBox/utils/constants";
import Show from "./Show";

const upcomingShows = [
  {
    month: "January",
    day: "07",
    year: "2026",
    country: "New Zealand",
    city: "Invercargill",
    venue: "Civic Theatre",
    showType: "Early Show",
  },
  {
    month: "January",
    day: "15",
    year: "2026",
    country: "Australia",
    city: "Sydney",
    venue: "Opera House",
    showType: "Evening Show",
  },
];

const ShowsGrid = styled(Box)({
  display: "grid",
  position: "relative",
  backgroundColor: LIGHT_BROWN,

  zIndex: 5,
});

const Shows: React.FC = () => {
  const theme = useTheme();

  const handleBooking = (show: (typeof upcomingShows)[0]) => {
    console.log(
      `Booking show: ${show.venue} on ${show.month} ${show.day}, ${show.year}`
    );
  };

  return (
    <ShowsGrid>
      <Box sx={{ height: NAVBAR_HEIGHT, background: RED }} />
      <TitleAnimation title="SHOWS" backgroundColor={LIGHT_BROWN} />
      <Box
        sx={{
          padding: theme.spacing(2),
          display: "grid",
          justifyContent: "center",
        }}
      >
        {upcomingShows.map((show, index) => (
          <Show key={index} {...show} onBookNow={() => handleBooking(show)} />
        ))}
      </Box>
    </ShowsGrid>
  );
};

export default Shows;
