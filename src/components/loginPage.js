import React, { Component } from "react";
import logo from "./assets/EPF.png";
import "./App.css";
import Kyc_form from "./kyc_form";




class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.uan.value);

    if (!e.target.uan.value) {
      alert("UAN is required");
    } else if (e.target.uan.value.length < 12) {
      alert("Please enter a valid 12 digit UAN");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.uan.value === "123456789123" &&
      e.target.password.value === "123456"
    ) {
      alert("Successfully logged in");
      e.target.uan.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong UAN or password combination");
    }
  };

  handleClick = (e) => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  render() {
    return (
      <div className="App">
      {/* <Kyc_form/> */}
        {/* <Table_KYC/>
        <MTable /> */}
         <img src={logo} className="logo" alt="Login Pages" />
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="uan">Enter UAN</label>
            <input type="number" name="uan" placeholder="100701440848" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">SIGN IN</button>
        </form> 
        {/* <button className="secondary" onClick={this.handleClick}>
          Criar uma nova conta
        </button> */}
      </div>
    );
  }
}

export default Login;
