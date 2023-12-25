import { useDispatch } from "react-redux";
import { filterCarsByRating } from "../../../store/slices";
import { Box, Rating, Typography } from "@mui/material";

export const FilterByRating = () => {

  const dispatch = useDispatch();

  const handleValorationChange = (event, newValue) => {
    const value = newValue === null ? 0 : newValue;
    
    dispatch(filterCarsByRating(value));
  }

  return (
    <Box style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="subtitle1" gutterBottom>
        Media de valoración por cliente
      </Typography>
      <Rating
        name="ratingClient"
        precision={1}
        onChange={(event, newValue) => handleValorationChange(event, newValue)}
        max={5}
        size="large"
      />
    </Box>
  )
}
