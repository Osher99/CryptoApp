export const getCoinPricesAndTimestamps = (coinHistory) => {
    const coinPriceArray = [];
    const coinTimeStampArray = [];
    
    for(let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPriceArray.push(coinHistory?.data?.history[i]?.price);
        coinTimeStampArray.push(new Date(coinHistory?.data?.history[i]?.timestamp * 1000).toLocaleDateString());
    }
    return { coinPriceArray, coinTimeStampArray };
}