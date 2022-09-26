import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
    HomeOutlined,
    MoneyCollectOutlined,
    BulbOutlined,
    FundOutlined,
    MenuOutlined
} from '@ant-design/icons';
import icon from '../assets/cryptocurrency.png';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(true);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    useEffect(() => {
        if (screenSize < 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    },[screenSize])

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">CryptoX</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
                </div>

                {activeMenu && 
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined />} key="homepage">
                        <Link to="/" onClick={() => setActiveMenu(false)}>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />} key="currencies">
                        <Link to="/currencies" onClick={() => setActiveMenu(false)}>Currencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />} key="exchanges">
                        <Link to="/exchanges" onClick={() => setActiveMenu(false)}>Ranking</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}  key="news">
                        <Link to="/news" onClick={() => setActiveMenu(false)}>News</Link>
                    </Menu.Item>
                </Menu>
                }
        </div>
    );
};

export default Navbar;