import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {
    Navbar,
    Exchanges,
    CryptoDetails,
    Currencies,
    Homepage,
    News
} from './components';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path="/" element={<Homepage />} />
                            <Route exact path="/exchanges" element={<Exchanges />} />
                            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
                            <Route exact path="/currencies" element={<Currencies />} />
                            <Route exact path="/news" element={<News />} />
                        </Routes>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        CryptoX By Osher Dror <br />
                        All right reserved © 2021
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/currencies">Currencies</Link>
                        <Link to="/exchanges">Ranking</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    );
};

export default App;