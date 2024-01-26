import {
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { selectStyle } from "./blog-form-themes/select-theme";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { FormStateContext } from "./blog-form-contexts/FormStateContext";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function SecondSection() {
  const {formData, changeHandler} = React.useContext(FormStateContext);
  return (
    <div className="first-part-div">
      <div className="h4-div">
        Second, Choose Which Category And Keywords Best Represent This Blog
      </div>
      <FormControl className="text-field-class" sx={{  marginBottom: ".5rem" }}>
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            color: "white",
            "&.Mui-focused": {
              color: "white", // Set the color for the focused state
            },
          }}
        >
          Blog Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Blog Category"
          sx={selectStyle}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Autocomplete
      limitTags={5}
        sx={{
          backgroundColor: "rgb(51, 51, 51)",
          color: "white",
          "& .MuiAutocomplete-inputRoot": {
            color: "white",
          },
          "& .MuiAutocomplete-clearIndicator, & .MuiAutocomplete-popupIndicator":
            {
              color: "white",
            },
          "& .MuiAutocomplete-option": {
            color: "white",
          },
          '& .MuiAutocomplete-option[data-focus="true"]': {
            backgroundColor: "lightgray", // Set the background color for focused options in the dropdown
          },
          "& .MuiAutocomplete-option.Mui-selected": {
            backgroundColor: "lightgray", // Set the background color for selected options in the dropdown
            color: "white",
          },
        }}
        multiple
        id="checkboxes-tags-demo"
        options={top100Films}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </li>
        )}
        className="text-field-class"
        // style={{ width: "50%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="KeyWords/Tags"
            placeholder=""
            InputLabelProps={{ style: { color: "white" } }}
            sx={{
              backgroundColor: "rgb(51, 51, 51)",
              "& .MuiAutocomplete-input": {
                color: "white", // Set the text color for chosen options
              },
              "& .MuiChip-root": {
                backgroundColor: "rgb(21,21,21)", // Set the background color for chosen options
                color: "white", // Set the text color for chosen options
                "& .MuiChip-deleteIcon": {
                  color: "white", // Set the delete (remove) icon color for chosen options
                },
              },
            }}
          />
        )}
      />
      <div id="last-first-div">
        <Alert
          variant="outlined"
          style={{
            marginTop: "1rem",
            width: "100%",
            color: "white",
            marginBottom: "3rem",
          }}
          id="alert"
          severity="info"
        >
          Note: These Tags Will Help The Exposure Of Your Blog
        </Alert>
      </div>
    </div>
  );
}
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
];
