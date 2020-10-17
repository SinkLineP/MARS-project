import React, { Component } from "react";
import axios from 'axios';
import "./logsign.scss";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        };
    
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }

    onSubmit(event){
        //alert(`${this.state.login}, добро пожаловать!`);
        event.preventDefault();

        

        // var session_url = 'http://localhost:3000/api/v1/auth/sign_in'

        // axios.post(session_url, {
        //     withCredentials: true,
        //     headers: {
        //       "Accept": "application/json",
        //       "Content-Type": "application/json"
        //     }
        //   },{
        //     data: {
        //       email: this.state.email,
        //       password: this.state.password
        //   }}).then(function(response) {
        //     console.log('Authenticated');
        //   }).catch(function(error) {
        //     console.log('Error on Authentication');
        //   });
        
          axios({
            method: 'post',
            url: 'https://djiborda.herokuapp.com/api/v1/auth/sign_in',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
            data: {
              email: this.state.email,
              password: this.state.password
            }
          })
          .then(response => {
            console.log(response);
            this.setState({events: response.data})
            if (response.status === 200) {
              this.props.history.push('/')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }    

    onChangeEmail(event) {
        this.setState({email: event.target.value});
      }
    
    onChangePassword(event){
    this.setState({password: event.target.value});
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} className="back">
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control form-custom" placeholder="Email" name="email" value={this.state.email}
                           onChange={this.onChangeEmail}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control form-custom" placeholder="Enter password" name="password" value={this.state.password}
                            onChange={this.onChangePassword}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox remember">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block btn-custom">Submit</button>
                <p className="forgot-password forgot-password-custom2">
                    Forgot <a href="sign-up">password?</a>
                </p>
            </form>
        );
    }
}