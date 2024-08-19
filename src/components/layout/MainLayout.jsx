import React from 'react';
import { Layout } from 'antd';
import CustomHeader from './CustomHeader';
import CustomFooter from './CustomFooter';
import CustomSider from './CustomSider';
import { useRoutes } from 'react-router-dom';
import FilterSider from '../../features/homepage/FilterSider';
import CreateBlogSider from '../../features/createblog/CreateBlogSider';
import BlogDetailSider from '../../features/blogdetail/BlogDetailSider';
import { BlogProvider } from '../../contexts/BlogContext';

const { Content } = Layout;

const MainLayout = ({ children }) => {
  const siderRoutes = useRoutes([
    { path: '/', element: <FilterSider/> },
    { path: '/post', element: <CreateBlogSider/> },
    { path: '/blogdetail/:id', element: <BlogDetailSider/> }
  ]);

  return (
    <BlogProvider>
      <Layout>
        <CustomHeader/>
          <Layout>
            <Content
              style={{
                padding: "20px 30px 20px 50px"
              }}
              >
              {children}
            </Content>
            <CustomSider content={siderRoutes}/>    
          </Layout>
        <CustomFooter/>
      </Layout>
    </BlogProvider>
  );
}

export default MainLayout;
