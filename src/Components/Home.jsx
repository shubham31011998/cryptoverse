import React from 'react';
import Millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from './Services/CryptoApi';
import { Cryptocurrencies, News} from '../Components';
import { Loader } from '../Components';

const { Title } = Typography;

const Home = () => {

  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log('data', globalStats);
  // console.log('data', isFetching);
  if(isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className='heading'>Global Crypto States</Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total CryptoCurrencies" value={Millify(globalStats.totalCoins)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={Millify(globalStats.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={Millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={Millify(globalStats.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={Millify(globalStats.totalMarkets)} />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show more..</Link></Title>
      </div>
      <Cryptocurrencies simplified/>

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to="/news">Show more..</Link></Title>
      </div>
      <News simplified={true} />
    </>
  );
};

export default Home;
