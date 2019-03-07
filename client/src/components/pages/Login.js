import React from 'react';
import HomePic from "../../images/scvngr_home-screen-06.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'


const Login = () => {
  return (
    <div>
      <div className="background-gradient">

        <div className="image-box" id="mainSection">
          <img src={HomePic} className="home-image" alt="SCVNGR Home Logo" />

          <div>
            <Button variant="btn btn-outline-light btn-block mt-3" size="lg" block>
              Login
            </Button>

            <Button variant="btn btn-outline-light btn-block" size="lg" block>
              Sign Up
            </Button>
          </div>;
        </div>

        <a href="#section2">
          <div class="arrow"></div>
        </a> 

      </div>
    </div>
  );
};

export default Login;
