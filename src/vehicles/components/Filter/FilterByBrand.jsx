import { useState } from "react";

import { Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import { filterCarsByBrand } from "../../../store/slices";
import { brands } from '../../../data'

export const FilterByBrand = () => {

  const dispatch = useDispatch();
  const [checkedBrands, setCheckedBrands] = useState({});

  const handleBrandChange = (event) => {
    const { name, checked } = event.target;

    setCheckedBrands(prevState => {
      const updatedBrands = {
        ...prevState,
        [name]: checked
      };

      const activeBrands = Object.keys(updatedBrands).filter(brand => updatedBrands[brand]);
      dispatch(filterCarsByBrand(activeBrands));

      return updatedBrands;
    });
  };

  return (
    <FormGroup sx={{ padding: '20px' }}>
      <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'center' }}>
        Marca
      </Typography>
      {brands.map((name) => (
        <FormControlLabel
          key={name}
          control={
            <Checkbox
              checked={!!checkedBrands[name]}
              onChange={handleBrandChange}
              name={name}
            />
          }
          label={name}
          sx={{ marginBottom: '10px' }}
        />
      ))}
    </FormGroup>
  )
}
