import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import Axios from 'axios';
var moment = require('moment');

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {}
    }
  }
  componentDidMount() {
    Axios.get('/api/jobinfo/findjobs')
      .then(res => {
        const jobs = res.data;
        console.log(jobs);
        let jobtitle = [];
        let job = [];
        let date = [];
        let jobcompany =[];
        jobs.forEach(element => {
          var stamp = moment(element.date_created).format("MM/DD");
          jobtitle.push(element.job_title);
          jobcompany.push(element.company)
          job.push(element.salary);
          date.push(stamp);
        });
        this.setState({
          Data: {
            labels: [jobcompany,jobtitle],
            datasets: [{
              label: 'Date Applied vs Job Salary',
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
        <Bar
          data={this.state.Data}
          options={{ maintainAspectRatio: false }} />
      </div>
    )
  }
}

export default LineChart