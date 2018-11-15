import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Panel from '../components/Panel';
import { Doughnut } from 'react-chartjs-2';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = (props) => ({
  labels: [
    '% Available',
    '% UnAvaiable',
  ],
  datasets: [{
    //data: [getRandomInt(0, 100), getRandomInt(0, 100)],
    data: (props.value)?[props.value.unavaiableDevicePercentage,props.value.availableDevicePercentage]:[0,0],
    backgroundColor: [
      '#4ce1b6',
      '#ff4861',
    ],
    hoverBackgroundColor: [
      '#4ce1b6',
      '#ff4861',
    ],
    borderColor: 'rgba(255,255,255,0.54)'
  }]
});


class DynamiclyRefreshedDoughnut extends PureComponent {

  constructor(props) {
    console.log("Cosn val");
    console.log();
    super(props);
    this.state = {
        props:props,
        data: getState(props)
    };
}

  componentWillMount() {
    // setInterval(() => {
      this.setState({ data: getState(this.props) });
    // }, 4000);
  }

  render() {
    //const { t } = this.props;

    return (      
      // <Panel xs={12} md={12} lg={6} title="Device Status Distribution">      
      //   <Doughnut data={this.state.data} />        
      // </Panel>
      <div>
      <Doughnut options={this.state.options} data={this.state.data} />
  </div>
    )
  }
}

export default (DynamiclyRefreshedDoughnut);
