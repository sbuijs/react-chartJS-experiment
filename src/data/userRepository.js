
// API
// export const fetchPrices = async () => {
//     const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
//     const data = await res.json()
//     return data.data
// }

const url = '/data/dummyData.json';

export const fetchPrices = async () => {
    const data = await fetch(url)
    const items = await data.json()
    return items
}