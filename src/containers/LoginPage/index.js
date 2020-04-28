import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button'
import  TextField  from '@material-ui/core/TextField'

class LoginPage extends Component {
  state = {

    email: '',
    password:''

  }
  componentDidMount = () => {
    const token = window.localStorage.getItem('token')

    if(token === null) {
      this.props.goToLogin()
    }
  };
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

  render() {
    const { email, password } = this.state;
    
    return (
      <div onSubmit={handleOnSubmit}>
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
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
    

//   }
// } 

export default connect(null,null) (LoginPage);
