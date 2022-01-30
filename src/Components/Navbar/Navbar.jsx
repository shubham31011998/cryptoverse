import React from 'react';
import { Button, Typography, Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons/lib/icons';
// import icon from '../Images/cryptocurrency.png';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='nav-container'>
            <Link to="/">
                <div className='logo-container'>
                    <div className="wrap_c">
                        <div className="outer_c"></div>
                        <div className="inner_c"></div>
                    </div>
                    <h2 className='logo'>Cryptoverse</h2>
                </div>
            </Link>
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar
