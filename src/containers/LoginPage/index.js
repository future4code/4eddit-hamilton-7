import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button'
import  TextField  from '@material-ui/core/TextField'

class LoginPage extends Component {
  state = {

    email: '',
    password:''

  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleOnSubmit = () => {
    event.preventDefault()
    this.props.login(this.state.email)
    this.props.login(this.state.password)
  }
   handleLog = () => {
     window.localStorage = clear()
   }
  render() {
    const { email, password } = this.state;
    const log = localStorage.getItem('token') !==  null
    return (
      <>
      <form onSubmit={handleOnSubmit}>
       <TextField
          onChange = {this.handleInputChange}
          required
          name = "email"
          type = "email"
          placeholder = "mario-erika@gmail.com" 
          label = "E-mail"
          value = {email}

       />
       <TextField
          onChange = {this.handleInputChange}
          required
          name = "password"
          type = "password"
          placeholder = "*******"
          label = "Password"
          value = {password}

       />
        <Button type="submit">Submit</Button>
      </form>
      {log && <Button onClick={this.handleLog}>Logout</Button>}
      </>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
    

//   }
// } 

export default connect(null,null) (LoginPage);
