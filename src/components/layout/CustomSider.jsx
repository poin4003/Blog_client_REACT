import Sider from 'antd/es/layout/Sider';
import React from 'react';

const CustomSider = ({ content }) => {
  return (
    <Sider 
      width="250px"
      style={{
        background: '#f5f5f5',
        padding: '20px 50px 20px 0',
        textAlign: 'center'
      }}>
      <div>{content}</div>
    </Sider>
  );
}

export default CustomSider;
