import { Row, Col } from 'antd';
import React from 'react';
import BlogCard from './BlogCard';
import { useBlogContext } from '../../contexts/BlogContext';

const BlogList = () => {
  const { blogs } = useBlogContext();
  return (
    <div>
      <h2>BLOGS:</h2>
      <Row gutter={[32,16]} justify={"center"}>
        {blogs?.map((blog) => (
          <Col span={6}>
            <BlogCard blog={blog} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BlogList;
