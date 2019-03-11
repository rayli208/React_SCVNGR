import React from 'react';
import HomePic from "../../images/scvngr_home-screen-06.png";
import ModalSignUp from "../SignUpModal";
import ModalLogin from "../LoginModal";
import FirstVid from "../../images/Screen Recording 2019-03-08 at 10.37.06 AM.mov";
import SecondVid from "../../images/Screen Recording 2019-03-08 at 10.39.51 AM.mov"

const Login = (props) => {
  return (
    <div>
      <div className="background-gradient" id="mainSection">
        <div className="image-box">
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

      <div className="bg-container">
        <div className="container" id="section2">
          <div className="row py-5 text-center">
            <div className="col-12">
              <h2 className="pb-4">Add structure to your job search and track all of your jobs in one place!</h2>
            </div>
            <div className="col-12 col-md-6">
              <video width="100%" src={FirstVid} controls></video>
            </div>
            <div className="col-12 col-md-6 pt-5">
              <h5>Never lose track of the jobs you applied to.</h5>
              <p>When you apply to a job, click the "Enter Job Info" button, fill out the modal, and watch your job come to life.</p>
            </div>
          </div>

          <div className="row py-5 text-center">
            <div className="col-12">
              <h2 className="pb-4">Drag and drop functionality with ease!</h2>
            </div>
            <div className="col-12 col-md-6 pt-5">
              <h5>Keep up with your status for each job.</h5>
              <p>As you move along with each job update your account in the app to reflect your status. Simply click and drag the job to the new section it belongs in. Joel Embiid would be proud #trustTheProcess.</p>
            </div>
            <div className="col-12 col-md-6">
              <video width="100%" src={SecondVid} controls></video>
            </div>
          </div>

          <div className="row py-5 text-center">
            <div className="col-12">
              <h2 className="pb-4">Personalized data on your job search!</h2>
            </div>
            <div className="col-12 col-md-6">
              <video width="100%" src={FirstVid} controls></video>
            </div>
            <div className="col-12 col-md-6 pt-5">
              <h5>Generate charts based off of your job search history.</h5>
              <p>As you add a job, chart.js gathers and muniplates your data in specific charts making it easy to view all your data.</p>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Login;
