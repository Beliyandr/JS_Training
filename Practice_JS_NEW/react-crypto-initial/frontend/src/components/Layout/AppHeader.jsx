import React, { useEffect, useState } from 'react'
import { Button, Layout, Select, Space, Modal, Drawer } from 'antd';
import { useCrypto } from '../../context/crypto-context';
import { CoinInfoModal } from '../CoinInfoModal';
import { AddAssetForm } from '../AddAssetForm';

const headerStyle = {
  width: '100%',
  textAlign: 'center',
  height: 60,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  // backgroundColor: 'white'
};

export const AppHeader = () => {
  const [select, setSelect] = useState(false)
  const [modal, setModal] = useState(false)
  const [coin, setCoin] = useState(null)
  const { crypto } = useCrypto()
  const [drawer, setDrawer] = useState(false)

  useEffect(() => {
    const keypress = event => {
      if (event.key === '/') {
        setSelect(prev => !prev)
      }
    }
    document.addEventListener('keypress', keypress);

    return () => document.removeEventListener('keypress', keypress);
  }, [])

  function handleSelect(value) {
    setModal(true)
    setCoin(crypto.find(c => c.id === value))
  }


  return (
    <Layout.Header style={headerStyle}>
      <Select
        style={{
          width: '250px',
        }}
        open={select}
        onSelect={handleSelect}
        onClick={() => setSelect(prev => !prev)}
        value="press / to open"
        options={crypto.map(coin => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(option) => (
          <Space style={{ display: 'flex', alignItems: 'center' }}>
            <img src={option.data.icon} alt={option.data.label} style={{ width: '20px' }} />
            {option.data.label}
          </Space>
        )}
      />
      <Button type="primary" onClick={() => setDrawer(true)}>Add Asset </Button>

      <Modal title="Name coin:" open={modal} onOk={() => setModal(false)} onCancel={() => setModal(false)} footer={null}>
        <CoinInfoModal coin={coin} />
      </Modal>

      <Drawer destroyOnClose width={600} title="Add Asset" onClose={() => setDrawer(false)} open={drawer}>
        <AddAssetForm onClose={() => setDrawer(false)} />
      </Drawer>

    </Layout.Header>
  )
}
