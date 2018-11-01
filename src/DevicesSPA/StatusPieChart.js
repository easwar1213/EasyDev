import React, { PureComponent } from 'react';
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
      data: [getRandomInt(0, 1), getRandomInt(0, 2)],
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

class StatusPieChart extends PureComponent {

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
        return (
            <div>
                <Doughnut options={this.state.options} data={this.state.data} />
            </div>
        )
    }
}

export default (StatusPieChart);
