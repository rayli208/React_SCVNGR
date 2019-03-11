import React, { Component } from 'react';
import HomePic from "../../images/scvngr_home-screen-06.png";
import ModalSignUp from "../SignUpModal";
import ModalLogin from "../LoginModal";
import { Redirect } from 'react-router-dom';
import userAPI from '../../utils/userAPI';


class Login extends Component {

  state = {
    isLoggedIn: false,
    success: false,
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    password2: '',
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  login = event => {
    event.preventDefault();
    console.log(this.state.username, this.state.password);
    userAPI
      .login({username: this.state.username, password: this.state.password })
        .then(res => {
          console.log(res.data)
          this.setState({ isLoggedIn: res.data })
        })
        .catch(err => console.log(err));
  };

  checkRegistration = (event) => {
    event.preventDefault();

    const errorMsg = [];
    const lowerCaseLetter = /[a-z]/g;
    const upperCaseLetter = /[A-Z]/g;
    const number = /[0-9]/g;

    if (this.state.password !== this.state.password2) {
      errorMsg.push("Passwords do not match");
    }

    if (this.state.password.length < 8) {
      errorMsg.push("Password needs to be at least 8 characters");
    }

    if (!lowerCaseLetter.test(this.state.password)) {
      errorMsg.push('Password must contain at least one lowercase letter')
    }

    if(!upperCaseLetter.test(this.state.password)) { 
      errorMsg.push('Password must contain at least one uppercase letter');
    };

    if(!number.test(this.state.password)) { 
      errorMsg.push('Password must contain at least on number');
    };

    if (errorMsg.length > 0) {
      alert(`${errorMsg}`)
      return false;
    }

    else {
      this.registerUser();
    }
  }

  registerUser = () => {
    userAPI
      .register({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        username: this.state.username,
        password: this.state.password
      })
        .then(res => {
          console.log(res.data);
          this.setState({ success: res.data.success })
        })
        .catch(err => console.log(err));
  }

  render() {
    if (this.state.success || this.state.isLoggedIn) {
      return <Redirect to="/dashboard" />
    }
    return (
      <div>
        <div className="background-gradient">
          <div className="image-box" id="mainSection">
            <img src={HomePic} className="home-image" alt="SCVNGR Home Logo" />

            <div className="row mt-3">
              <div className="col-12 col-md-6">
                <div>
                  <ModalSignUp 
                    handleInputChange={this.handleInputChange}
                    firstName={this.state.first_name}
                    lastName={this.state.last_name}
                    username={this.state.username}
                    password={this.state.password}
                    password2={this.state.pasword2}
                    checkRegistration={this.checkRegistration} 
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div>
                  <ModalLogin 
                    handleInputChange={this.handleInputChange}
                    username={this.state.username}
                    password={this.state.password}
                    handleLogin={this.login}
                  />
                </div>
              </div>
            </div>
          </div>
          <a href="#section2">
            <div className="arrow"></div>
          </a> 
        </div>
      </div>
    );
  };
};

export default Login;
