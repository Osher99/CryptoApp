import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'aef1ccf387msh0f258120fc19deep1ea665jsn656d05a535ea',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  };

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';


const createRequest = (url) => ({
    url, headers: cryptoNewsHeaders
});


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi;