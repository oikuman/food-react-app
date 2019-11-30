import React from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import style from "./SearchForm.module.css";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const SearchForm = ({ handleSearchForm }) => {
  const classes = useStyles();
  return (
    <form className={style.form} onSubmit={handleSearchForm}>
      <TextField
        id="outlined-search"
        label="Search by Category"
        type="search"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
    </form>
  );
};

export default SearchForm;
