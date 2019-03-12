import React, { Component } from 'react';
import HomePic from "../../images/scvngr_home-screen-06.png";
import ModalSignUp from "../SignUpModal";
import ModalLogin from "../LoginModal";
import { Redirect } from 'react-router-dom';
import userAPI from '../../utils/userAPI';
import FirstVid from "../../images/Screen Recording 2019-03-08 at 10.37.06 AM.mov";
import SecondVid from "../../images/Screen Recording 2019-03-08 at 10.39.51 AM.mov";


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
      <div className="bg-container">
        <div className="container" id="section2">
          <div className="row py-5 align-items-center text-center">
            <div className="col-12">
              <h2 className="pb-4">Add structure to your job search by tracking all of your jobs in one place!</h2>
            </div>
            <div className="col-12 col-md-6">
              <video width="100%" src={FirstVid} controls></video>
            </div>
            <div className="col-12 col-md">
              <h5>Never lose track of the jobs you applied to.</h5>
              <p>After applying to a job, click the "Enter Job Info" button, fill out the modal, and watch your job come to life.</p>
            </div>
          </div>
          <div className="row py-5 align-items-center text-center">
            <div className="col-12">
              <h2 className="pb-4">Drag and drop functionality with ease!</h2>
            </div>
            <div className="col-12 col-md">
              <h5>Effortlessly track the status for each of your jobs.</h5>
              <p>As you move along the applicaiton process of each job, update your account in the app to reflect your status. Simply click and drag the job to the new section it belongs in.</p>
            </div>
            <div className="col-12 col-md-6">
              <video width="100%" src={SecondVid} controls></video>
            </div>
          </div>
          <div className="row py-5 align-items-center text-center">
            <div className="col-12">
              <h2 className="pb-4">Personalized data on your job search!</h2>
            </div>
            <div className="col-12 col-md-6">
              <video width="100%" src={FirstVid} controls></video>
            </div>
            <div className="col-12 col-md-6">
              <h5>Charts dynamically generated based on your job search.</h5>
              <p>As you add a job to your profile, chart.js compiles your data and creates charts specific to the given data type; making it easy to view all your application history and status.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };
};

export default Login;
