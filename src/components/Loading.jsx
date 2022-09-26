import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Col } from 'antd';

const Loading = () => {
    return (
        <>
            <Col xs={24} sm={12} lg={6} className="crypto-card">
                <Skeleton height={350} />
            </Col>
        </>
    );
}

export default Loading;
