import React, { Component } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

class UnitsGraph extends Component {
    createData = () => {
        const data = {
            labels: ['Validé', 'Échec'],
            datasets: [
                {
                    label: '(non-)Présence',
                    data: [this.props.data1, this.props.data2],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1,
                }
            ]
        }
        return (data);
    }

    render() {
        return (
            <div>
                <Pie data={this.createData()} />
                Modules
            </div>
        );
    };
}

export default UnitsGraph;
