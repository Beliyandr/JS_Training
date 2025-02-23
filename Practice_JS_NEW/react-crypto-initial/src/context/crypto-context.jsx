import { createContext, useContext, useEffect, useState } from 'react'
import { fakeFetchCrypto, fetchAssets } from '../api';
import { percentDifference } from '../utils';
import { Spin } from 'antd';


const CryptoContext = createContext({
  assets: [],
  crypto: [],
  loading: false
})

function mapAssets(asset) {
  const coin = result.find(c => c.id === asset.id)

  return {
    grow: asset.price < coin.price, // boolean
    growPercent: percentDifference(asset.price, coin.price),
    totalAmount: asset.amount * coin.price,
    totalProfit: asset.amount * coin.price - asset.amount * asset.price,
    ...asset
  }
}


export function CryptoContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAssets] = useState([]);


  useEffect(() => {
    async function preload() {
      setLoading(true)
      const { result } = await fakeFetchCrypto()
      const assets = await fetchAssets()

      setCrypto(result)
      setAssets(mapAssets(assets, result))

      setLoading(false)
    }

    preload();
  }, [])

  function addAssets(newAsset) {
    setAssets(prev => [...prev, newAsset])
  }

  return (
    <CryptoContext.Provider value={{ loading, crypto, assets, addAssets }}>
      {children}
    </CryptoContext.Provider>
  )
}


export default CryptoContext;

export function useCrypto() {
  return useContext(CryptoContext)
}
