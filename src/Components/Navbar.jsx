import React from 'react';
import { Button, Typography, Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons/lib/icons';
import icon from '../Images/cryptocurrency.png';

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size="large"></Avatar>
                <Typography.Title level={2} className='logo'>
                    <Link to="/">Cryptoverse</Link>
                    hjdahdkj
                </Typography.Title>
            </div>
        </div>
    )
}

export default Navbar
