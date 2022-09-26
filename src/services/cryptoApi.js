import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
           'X-RapidAPI-Key': 'aef1ccf387msh0f258120fc19deep1ea665jsn656d05a535ea',
           'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        };

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const uuid = '-zdvbieRdZ';

const createRequest = (url) => ({
    url, headers: cryptoApiHeaders
});


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest(`/exchange/${uuid}/coins`),
        })
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery
} = cryptoApi;