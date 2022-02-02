import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
  'x-rapidapi-host': "coinranking1.p.rapidapi.com",
  'x-rapidapi-key': "9c29924914mshbbc977f7ed13eb0p10580cjsn6f8f37f5b428",
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
const BaseUrl = "https://coinranking1.p.rapidapi.com";
// const count = 50;
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    // getCryptoDetails: builder.query({
    //   query: (coinId) => createRequest(`/coin/${coinId}`),
    // }),

    // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    // getCryptoHistory: builder.query({
    //   query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    // }),

    // Note: To access this endpoint you need premium plan
    // getExchanges: builder.query({
    //   query: () => createRequest('/exchanges'),
    // }),
  }),
});

export const {
  useGetCryptosQuery,
  // useGetCryptoDetailsQuery,
  // useGetExchangesQuery,
  // useGetCryptoHistoryQuery,
} = cryptoApi;