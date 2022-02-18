import {React, useState} from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from './Services/CryptoNewsApi';
import { useGetCryptosQuery } from './Services/CryptoApi';
import Loader from './Loader/Loader';
import demoImg from "../Images/demo.jpg"

const {Title, Text} = Typography;
const {Option} = Select;
const demoImage = "https://img.etimg.com/thumb/msid-89531395,width-650,imgsize-489916,,resizemode-4,quality-100/crypto-tax.jpg";


const News = ({ simplefied }) => {
  const [newsCategory, setNewsCategory] = useState("CryptoCurrency")

  const { data: cryptoNews }= useGetCryptoNewsQuery({newsCategory,count : simplefied ? 6: 15 });
  const {data}= useGetCryptosQuery(100);
  // console.log('data', cryptoNews)

  if(!cryptoNews?.value) return <Loader />;
  return (
    <Row gutter={[24, 24]}>
      {!simplefied && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder="Select a Coin"
            optionFilterProp="children"
            onChange={(val)=>setNewsCategory(val)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase())}
          >
            <Option vlaue="Cryptocurrencies">Cryptocurrencies</Option>
            {data?.data?.coins?.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news,i)=>(
        <Col xs={24} sm={12} lg={8} key={i} >
          <Card hoverable className='news-card'>
            <a href={news.url} target="blank" rel='noreferrence'>
              <div className='news-image-container'>
                <Title className='news-title' level={4}>{news.name}</Title>
                <img style={{maxHeight:"100px", maxWidth:"200px"}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news"></img>
              </div>
                <p>
                  {!simplefied && news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : `${news.description}`
                  }
                </p>
                <div className='provider-container'>
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='news'></Avatar>
                    <Text className='provider-name'>{news.provider[0]?.name}</Text>
                  </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
