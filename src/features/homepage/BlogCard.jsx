import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
const { Meta } = Card;

const BlogCard = ({ blog }) => {
  const nav = useNavigate();
  return (
    <Card onClick={() => {
      nav(`/blogdetail/${blog.id}`)
    }}
      key = {blog.id}
      hoverable
      style={{
        width: "100%",
        height: "350px"
      }}
      cover={
        <img 
          alt='alter' 
          src={blog?.image} 
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover'
          }}
        />}
      bordered={false}
    >
      <Meta 
        title={blog?.title} 
        description={
          <>
            <div style={{ color: 'black' }}>view: {blog?.view}</div>
            <div 
              style={{ 
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {blog?.content}
            </div>
          </>
        } 
      />
    </Card>    
  );
}

export default BlogCard;
