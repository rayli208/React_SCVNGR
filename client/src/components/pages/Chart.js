import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import Line from "./lineChart";
import Navigation from '../Navigation'
import Axios from 'axios';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {}
    }
  }
  componentDidMount() {
    Axios.get('http://localhost:3000/api/jobinfo/findjobs')
      .then(res => {
        const jobs = res.data;
        console.log(jobs);
        let jobtitle = [];
        let job = [];
        let date = [];
        jobs.forEach(element => {
          jobtitle.push(element.company);
          job.push(element.salary);
          date.push(element.date_created);
        });
        this.setState({
          Data: {
            labels: date,
            datasets: [{
              label: 'idk',
              data: job,
              backgroundColor: "rgba(193, 41, 46, 0.75)",
              borderColor: "rgba(59, 89, 152, 1)",
              pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
              pointHoverBorderColor: "rgba(59, 89, 152, 1)",
            }
            ]

          }
        });

      })
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
        <div className="row">
        <div className="col">
        <Line />
        <div/>
        <div className="row">
      <div className="col">
        <Bar
          data={this.state.Data}
          options={{ maintainAspectRatio: false }} />
          </div>
          </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

export default BarChart



