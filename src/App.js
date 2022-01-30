import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from 'antd';
import { Navbar, Home, Exchanges, Cryptocurrencies, CryptoDetails, News } from './Components';
import './App.css'
import { BorderBottomOutlined } from '@ant-design/icons/lib/icons';


const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges />
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies />
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails />
                            </Route>
                            <Route exact path="/news">
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                <div className='footer' level={5} >
                    <Link to="/">
                        <div className='pb-2' style={{paddingBottom:"4px"}}>
                            <div className="wrap_c">
                                <div className="outer_c"></div>
                                <div className="inner_c"></div>
                            </div>
                            {/* <h2 className='logo'>Cryptoverse</h2> */}
                        </div>
                    </Link>
                    <Typography style={{ color: "#fff", textAlign: "center" }}>
                        {/* Cryptoverse <br /> */}
                        All rights reserved
                    </Typography>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App
