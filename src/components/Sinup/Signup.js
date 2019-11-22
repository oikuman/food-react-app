import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Signup.module.css";

class Signup extends Component {
  state = {
    user: ""
  };

  sendUserData = async user => {
    try {
      const url = "http://localhost:3005";
      let result = await axios.post(`${url}/signup`, user, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  submitForm = e => {
    const user = {
      username: e.target.querySelector("#name").value,
      telephone: e.target.querySelector("#tel").value,
      password: e.target.querySelector("#psw").value,
      email: e.target.querySelector("#email").value
    };
    console.log(user);
    this.sendUserData(user).then(result => console.log(result));
  };

  render() {
    return (
      <form className={classes.form} onSubmit={this.submitForm}>
        <div>
          <TextField
            id="name"
            className={classes.textField}
            label="Name"
            type="text"
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="tel"
            className={classes.textField}
            label="Telephone"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="psw"
            className={classes.textField}
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            required
          />
        </div>
        <div>
          <TextField
            id="email"
            className={classes.textField}
            label="Email"
            type="email"
            margin="normal"
            variant="outlined"
            required
          />
        </div>
        <div>
          <Button variant="contained" type="submit" className={classes.button}>
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default Signup;
