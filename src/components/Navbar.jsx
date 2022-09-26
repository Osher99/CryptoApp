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
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    useEffect(() => {
        if (screenSize < 800) {
            setIsMobile(true);
            setActiveMenu(false);
        } else {
            setIsMobile(false);
            setActiveMenu(true);
        }
    },[screenSize])

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />}
                <Typography.Title level={2} className="logo">
                    <Link to="/" className="menu-logo-title">CryptoX {!isMobile && <><br/ ></>} <small style={{ fontSize: '11px' }}>By Osher Dror</small></Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
                </div>

                {activeMenu && 
                <Menu theme="dark" className="menu-items">
                    <Menu.Item icon={<HomeOutlined />} key="homepage">
                        <Link to="/" onClick={() => isMobile ? setActiveMenu(false) : null}>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />} key="currencies">
                        <Link to="/currencies" onClick={() => isMobile ? setActiveMenu(false) : null}>Currencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />} key="exchanges">
                        <Link to="/exchanges" onClick={() => isMobile ? setActiveMenu(false) : null}>Ranking</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}  key="news">
                        <Link to="/news" onClick={() => isMobile ? setActiveMenu(false) : null}>News</Link>
                    </Menu.Item>
                </Menu>
                }
        </div>
    );
};

export default Navbar;