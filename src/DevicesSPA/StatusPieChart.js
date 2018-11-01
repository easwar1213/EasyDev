import React, { PureComponent } from 'react';

import { Doughnut } from 'react-chartjs-2';
import Paper from "@material-ui/core/Paper";



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
    labels: [
        '% Unavailable',
        '% Avaiable',
    ],


    datasets: [{
        data: [50,50],
        backgroundColor: [
            '#D81B60',
            '#81C784',
        ],
        hoverBackgroundColor: [
            '#D81B60',
            '#81C784',
        ],
        borderColor: 'rgba(255,255,255,0.54)',
        borderWidth: 2,
    }]
});

const options = {
    legend: {
        position: 'left'
    }
}
class StatusPieChart extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            data: getState(),
            options: options
        };
    }

    componentWillMount() {
        //setInterval(() => {
        this.setState({ data: getState() });
        this.setState({ options: options });

        // }, 4000);
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
