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
//TODO THIS WHOLE PAGE NEEDS TO BE CONTROLLED ON INPUT LEVEL
export default function SecondSection() {
  const [options, setOptions] = React.useState([]);
  const { formData, changeHandler, blogState } =
    React.useContext(FormStateContext);
  const { blog_category } = formData;
  React.useEffect(() => {
    const data = blogState.categories.filter((n: any) => {
      return blog_category && Number(blog_category) === n.id;
    });
    if (data.length > 0) {
      setOptions(data[0].SubCategory);
    }
  }, [blog_category, blogState.categories]);
  console.log(formData);
  return (
    <div className="first-part-div">
      <div className="h4-div">
        Second, Choose Which Category And Keywords Best Represent This Blog
      </div>
      <FormControl className="text-field-class" sx={{ marginBottom: ".5rem" }}>
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
          name="blog_category"
          value={formData.blog_category}
          label="Blog Category"
          sx={selectStyle}
          onChange={(e) => changeHandler(e.target.name, e.target.value)}
        >
          {blogState.categories.map((n: any) => {
            return (
              <MenuItem key={n.id} value={n.id}>
                {n.category_description}
              </MenuItem>
            );
          })}
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
        options={options}
        disableCloseOnSelect
        getOptionLabel={(option: any) => option.sub_category_name || ""}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
              // TODO
              // onChange={(e)=>changeHandler('sub_categories',option.id)}
            />
            {option.sub_category_name}
          </li>
        )}
        className="text-field-class"
        // style={{ width: "50%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="KeyWords/Tags"
            //TODO
            // disabled={true}
            value={formData.sub_search}
            name="sub_search"
            onChange={(e) => changeHandler(e.target.name, e.target.value)}
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

