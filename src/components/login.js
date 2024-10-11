import React, { Component } from "react";
import logo from "./EPF.png";
// import './App.css';
import {Navigate} from 'react-router-dom';

class Login extends Component {

  state = {
    success: false
  }

  handleSubmit = (e) => {
      e.preventDefault();
      //console.log(e.target.uan.value);
      let uan = e.target.uan.value
      let password = e.target.password.value

      if (!e.target.uan.value) {
          alert("UAN is required");
      } else if (e.target.uan.value.length < 12) {
          alert("Please enter a valid 12 digit UAN");
      } else if (!e.target.password.value) {
          alert("Password is required");
      } else {
        //this.props.history.push('/home')
        //<Navigate to = "/home" />
        // axios.post('/api/users/login', {uan, password})
        // .then(response => {
        //   if(response.data.kyc){
        //     // this.setState({success: true})
        //     console.log("done")
        //     this.props.history.push('/home')
        //   }
       

      }
  };

  handleClick = (e) => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  // componentDidMount(){
  //   if(this.state.success){
  //     console.log(this.props)
  //     this.props.history.push('/home')
  //   }
  // }

  render() {
    return (
      <div className="App">
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
