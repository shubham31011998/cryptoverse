import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '9c29924914mshbbc977f7ed13eb0p10580cjsn6f8f37f5b428'
  }

const  BaseUrl = "https://bing-news-search1.p.rapidapi.com/news";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl:BaseUrl}),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory,count }) => createRequest(`/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
    }),
  });

  export const {
    useGetCryptoNewsQuery
  } = cryptoNewsApi;