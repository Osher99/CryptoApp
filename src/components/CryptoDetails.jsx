import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import {
    Col,
    Row,
    Typography,
    Select
 } from 'antd';
import { MultipleLoading } from '../components';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi';
import { time, stats, genericStats } from '../utils/config';
import LineChart from './LineChart';

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
    const { coinId } = useParams();
    const [timePeriod, setTimePeriod] = useState('7d');
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });

    const cryptoDetails = data?.data?.coin ?? {};
    
    if (isFetching) {
        return (
            <MultipleLoading skeletonsNum={12} />
        );   
    }

    return (
       <Col className="coin-detail-container">
            <Col className="coin-heading-container">
                <Title level={2} className="coin-name">
                    {cryptoDetails?.name} ({cryptoDetails?.slug}) Price
                </Title>
                <p>
                    {cryptoDetails?.name} live price in US Dollars.
                    View value Statistics, market cap and supply.
                </p>
            </Col>
            <Select
                defaultValue="7d"
                className="select-timeperiod"
                placeholder="Select Time Period"
                onChange={(value) => setTimePeriod(value)}
            >
                {time.map((date) => <Option key={date}>{date}</Option>)}
            </Select>
            <LineChart
            coinHistory={coinHistory}
            currentPrice={millify(cryptoDetails?.price)}
            coinName={cryptoDetails?.name}
            />
            <Col className="stats-container">
                <Col className="coin-value-statistics">
                    <Col className="coin-value-statistics-heading">
                        <Title level={3} className="coin-details-heading">
                            {cryptoDetails?.name} Value Statistics
                        </Title>
                        <p>
                            An overview showing the stats of {cryptoDetails?.name}
                        </p>
                    </Col>
                    {stats(cryptoDetails).map(({ icon, title, value }) => (
                        <Col className="coin-stats" key={title}>
                            <Col className="coin-stats-name">
                                <Text>{icon}</Text>
                                <Text>{title}</Text>
                            </Col>
                            <Text className="stats">{value}</Text>
                        </Col>
                    ))}
                </Col>
                <Col className="other-stats-info">
                    <Col className="coin-value-statistics-heading">
                        <Title level={3} className="coin-details-heading">
                            Other Statistics
                        </Title>
                        <p>
                            An overview showing the stats of Cryptocurrencies
                        </p>
                    </Col>
                    {genericStats(cryptoDetails).map(({ icon, title, value }) => (
                        <Col className="coin-stats" key={title}>
                            <Col className="coin-stats-name">
                                <Text>{icon}</Text>
                                <Text>{title}</Text>
                            </Col>
                            <Text className="stats">{value}</Text>
                        </Col>
                    ))}
                </Col>
            </Col>
            <Col className="coin-desc-link">
                <Row className="coin-desc">
                    <Title level={3} className="coin-detail-heading">
                        What is {cryptoDetails?.name}
                        {HTMLReactParser(cryptoDetails?.description)}
                    </Title>
                </Row>
                <Col className="coin-links">
                    <Title level={3} className="coin-details-heading">
                        {cryptoDetails?.name} Links
                    </Title>
                    {cryptoDetails?.links.map((link) => (
                        <Row className="coin-link" key={link?.name}>
                            <Title level={5} className="link-name">
                                {link?.type}
                            </Title>
                            <a href={link?.url} target="_blank" rel="noreferrer">
                                {link?.name}
                            </a>
                        </Row>
                    ))}
                </Col>
            </Col>
       </Col>
    );
};

export default CryptoDetails;