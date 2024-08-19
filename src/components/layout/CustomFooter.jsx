import { ConfigProvider } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import React from 'react';

const CustomFooter = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            footerBg: '#001529'
          }
        }
      }}
    >
      <Footer
        style={{
          color: 'white',
          textAlign: 'center'
        }} 
      >
      PchuyBlog ©2024 Created by Pchuy
      </Footer>
    </ConfigProvider>
  );
}

export default CustomFooter;
