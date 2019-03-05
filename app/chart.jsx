// assets/js/index.jsx
import React from 'react';
import uuid from 'uuid/v4';
import c3 from 'c3';


class Chart extends React.Component {
    constructor(props) {
        super(props);

        // All ids must begin with a alphanumeric character
        this.id = 'chart-' + uuid();
        this._update = this._update.bind(this);
    }

    _update() {
        const data = this.props.data;
        this.chart = c3.generate({
            bindto: `#${this.id}`,
            data: {
                columns: [
                    ['Male', 0],
                    ['Female', 0],
                    ['Brand', 0]
                ],
                type: 'bar',
                colors: {
                    Male: '#0066CC',
                    Female: '#FF6666',
                    Brand: '#808080'
                },
                groups: [
                    ['Male', 'Female', 'Brand']
                ],
                order: null
            },
            bar: {
                width: {
                    ratio: 0.3
                }
            },
            transition: {
                duration: 500
            },
            tooltip: {
                show: false
            },
            axis: {
                x: { show: false },
                y: { show: false },
                rotated: true,
            },
            size: { width: 200, height: 100 },
            grid: {
                x: { show: false }
            },
            legend: {
                show: false
            }
        });

        setTimeout(() => {
            this.chart.load({
                columns: [
                    ['Male', data.male],
                    ['Female', data.female],
                    ['Brand', data.brand]
                ]
            });
        }, 500);
    }

    componentDidMount() {
        this._update();
    }

    render() {
        return (
            <div id={this.id} className="chart"></div>
        );
    }
}


export default Chart;
