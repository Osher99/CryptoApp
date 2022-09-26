import React from 'react';
import { Row } from 'antd';
import { Loading } from '../components';

const MultipleLoading = ({ skeletonsNum }) => {
    return (
        <Row gutters={[12, 32]} className="crypto-card-container">
            {
                [...Array(skeletonsNum)].map((e, i) => 
                <Loading key={i} />
                )
            }
        </Row>
    );   
}

export default MultipleLoading;
