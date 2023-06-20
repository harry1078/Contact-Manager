import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = (props) => {
  const { query, setQuery } = props;

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Box width="60%">
      <TextField
        fullWidth
        id="search"
        type="search"
        placeholder="search movie"
        value={query}
        onChange={handleChange}
        sx={{
          backgroundColor: "#fff",
          padding: 0,

          "& .MuiInputBase-input": {
            padding: "13.5px 12px",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
