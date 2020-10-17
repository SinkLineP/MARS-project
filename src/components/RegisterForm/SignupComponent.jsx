import React, { Component } from "react";
import axios from 'axios';
import "./logsign.scss";


export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      password: ''
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
  }

  
  
  onSubmit(event){
    //alert(`${this.state.login}, добро пожаловать!`);
    event.preventDefault();
    

    axios({
      method: 'post',
      url: 'https://djiborda.herokuapp.com/api/v1/auth',
      data: {
        email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        password: this.state.password
      }
    })
    .then(response => {
      if (response.status === 200) {
        this.props.history.push('/sign-in')
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  onChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  onChangeFirstName(event) {
    this.setState({first_name: event.target.value});
  }

  onChangeLastName(event) {
    this.setState({last_name: event.target.value});
  }

  onChangePassword(event){
    this.setState({password: event.target.value});
  }

  

    render() {
        return (
            <form onSubmit={this.onSubmit} className="back">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control form-custom" placeholder="Email" name="email" value={this.state.email}
                           onChange={this.onChangeEmail}/>
                </div>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control form-custom" placeholder="First name" name="first_name" value={this.state.first_name}
                           onChange={this.onChangeFirstName}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control form-custom" placeholder="Last name" name="last_name" value={this.state.last_name}
                           onChange={this.onChangeLastName}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control form-custom" placeholder="Enter password" name="password" value={this.state.password}
                            onChange={this.onChangePassword}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block btn-custom" value="Submit">Sign Up</button>
                <p className="forgot-password forgot-password-custom">
                    Already registered <a href="sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}

