import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import { useGetExchangesQuery } from '../services/cryptoApi';
import MultipleLoading from './MultipleLoading';
import icon from '../assets/expand.png';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.coins;

  if (isFetching) return <MultipleLoading />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Price</Col>
      </Row>
      <Row>
        {exchangesList?.map((exchange) => (
          <Col span={24} key={exchange.uuid}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={(
                  <Row key={exchange.uuid} className="header-exchange">
                    <Col span={6}>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchange['24hVolume'])}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.price)}<Avatar className="expand-icon" src={icon} width="25px" height="25px" /></Col>
                  </Row>
                )}
              >
                <Col span={6}>
                  <a href={exchange.coinrankingUrl} target="_blank" rel="noreferrer" style={{ overflowWrap: 'break-word' }}>
                    Ranking URL
                  </a>
                </Col>
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;