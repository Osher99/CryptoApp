import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import { getCoinPricesAndTimestamps } from '../utils/utils';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const { coinPriceArray, coinTimeStampArray } = getCoinPricesAndTimestamps(coinHistory);

    const data = {
        labels: coinTimeStampArray,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPriceArray,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    };

    const options = {
        scales: {
            scales: {
                yAxes: [{
                  stacked: false,
                  scaleLabel: {
                    display: true,
                    fontColor: 'white',
                    fontSize: 25,
                    labelString: 'Faction Points'
                  },
                  ticks: {
                    fontColor: 'white',
                    fontSize: 20,
                    min: 0
                  },
                  gridLines: {
                    color: 'white'
                  }
                }],
                xAxes: [{
                  stacked: false,
                  scaleLabel: {
                    display: true,
                    fontColor: 'white',
                    fontSize: 25,
                    labelString: 'Day'
                  },
                  ticks: {
                    fontColor: 'white',
                    fontSize: 20,
                    min: 0
                  }        
                }]
              }
        }
    }

    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">
                    {coinName} Price Chart
                </Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">
                        {coinHistory?.data?.change}%
                    </Title>
                    <Title level={5} className="current-price">
                        Current {coinName} Price: $ {currentPrice}
                    </Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </>
    );
};

export default LineChart;