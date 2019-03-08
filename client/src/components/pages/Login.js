import React from 'react';
import HomePic from "../../images/scvngr_home-screen-06.png";
import ModalSignUp from "../SignUpModal";
import ModalLogin from "../LoginModal";


const Login = (props) => {
  return (
    <div>
      <div className="background-gradient">

        <div className="image-box" id="mainSection">
          <img src={HomePic} className="home-image" alt="SCVNGR Home Logo" />

          <div className="row mt-3">
            <div className="col-12 col-md-6">
            <div>
              <ModalSignUp getJobInfo={props.getJobInfo} />
            </div>
            </div>

            <div className="col-12 col-md-6">
            <div>
              <ModalLogin getJobInfo={props.getJobInfo} />
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

export default Login;
