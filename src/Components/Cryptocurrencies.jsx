import {React, useState} from 'react';
import Millify, { millify } from 'millify';
import { Typography, Row, Col, Card, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from './Services/CryptoApi';
// import { Loader } from './Loader';

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data: cryptolist, isFetching}= useGetCryptosQuery(count);
  const [cryptos, setcryptos] = useState(cryptolist?.data?.coins);

  if(isFetching) return "Loading";
  return (
    <>
      <Row gutter={[32, 32]} className='crytpo-card-container'>
        {cryptos?.map((currency)=>(
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card 
              title={`${currency.rank} - ${currency.name}`}
              extra={<img className='crypto-image' src={`${currency.iconUrl}`}/>}
              hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
