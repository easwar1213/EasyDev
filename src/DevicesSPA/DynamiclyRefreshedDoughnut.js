import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Panel from '../components/Panel';
import { Doughnut } from 'react-chartjs-2';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    '% Unavailable',
    '% Avaiable',
  ],
  datasets: [{
    data: [getRandomInt(0, 100), getRandomInt(0, 100)],
    backgroundColor: [
      '#81C784',
      '#D81B60',
    ],
    hoverBackgroundColor: [
      '#81C784',
      '#D81B60',
    ],
    borderColor: 'rgba(255,255,255,0.54)'
  }]
});

class DynamiclyRefreshedDoughnut extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      data: getState()
    };
  }

  componentWillMount() {
    setInterval(() => {
      this.setState({ data: getState() });
    }, 4000);
  }

  render() {
    const { t } = this.props;

    return (      
      <Panel xs={12} md={12} lg={6} title="Device Status Distribution">
        <Doughnut data={this.state.data} />
      </Panel>
    )
  }
}

export default (DynamiclyRefreshedDoughnut);
