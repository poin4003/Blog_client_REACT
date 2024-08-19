import React from 'react';
import { useBlogContext } from '../../contexts/BlogContext';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const { blogs } = useBlogContext();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <img 
        src={blog.image} 
        alt={blog.title}
        style={{
          width: '100%',
          height: '500px',
          borderRadius: '10px',
          marginBottom: '15px'
        }}   
      ></img>     
      <div 
        style={{ 
          background: 'white', 
          border: '1px solid #efefef',
          borderRadius: '10px',
          padding: '15px',
          fontSize: '15px'
        }}>
        {blog.content} 
      </div>
    </div>
  );
}

export default BlogDetail;
