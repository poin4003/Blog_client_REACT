import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfigProvider, Layout, Menu, Input } from 'antd';
import { useBlogContext } from '../../contexts/BlogContext';

const { Header } = Layout;
const { Search } = Input;

const CustomHeader = () => {
  const nav = useNavigate()
  const { setSearchKeyword } = useBlogContext();

  const handleSearch = (value) => {
    setSearchKeyword(value)
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            darkItemSelectedBg: "gray"
          }
        }
      }}
    >
      <Header
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{
          color: "white",
          padding: "0 40px 0 0",
          fontSize: "26px"
        }}>
          PC - HUY
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            { label: 'Blog', key: '/' },
            { label: 'Create', key: '/post' }
          ]}
          style={{
            flex: 1,
            minWidth: 0,
            fontSize: "18px"
          }}
          onClick={(e) => {
            nav(e.key)
          }}
        />
        <Search 
          placeholder="Search input ..." 
          onSearch={handleSearch}
          style={{
            width: 250,
            marginLeft: 'auto',
            fontSize: "18px"
          }}
          enterButton
        />
      </Header>
    </ConfigProvider>
  );
}

export default CustomHeader;
