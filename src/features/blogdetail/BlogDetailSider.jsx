import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlogContext } from '../../contexts/BlogContext';

const BlogDetailSider = () => {
  const { id } = useParams();
  const { blogs } = useBlogContext();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div
      style={{
        margin: '60px 0px',
        border: '1px solid #efefef',
        borderRadius: '10px',
        background: 'white',
        padding: '20px'
      }}
    >
      <h3>Information</h3>
      <hr style={{ backgroundColor: '#efefef', height: '1px', border: 'none' }} />
      <div style={{ marginBottom: '10px', textAlign: 'left' }}>
        <label style={{ fontWeight: 'bold', display: 'block' }}>Author:</label>
        <p style={{ margin: '10px 0' }}>{blog.author}</p>
      </div>
      <hr style={{ backgroundColor: '#efefef', height: '1px', border: 'none' }} />
      <div style={{ marginBottom: '10px', textAlign: 'left' }}>
        <label style={{ fontWeight: 'bold', display: 'block' }}>Create on:</label>
        <p style={{ margin: '10px 0' }}>{blog.createOn}</p>
      </div>
      <hr style={{ backgroundColor: '#efefef', height: '1px', border: 'none' }} />
      <div style={{ marginBottom: '10px', textAlign: 'left' }}>
        <label style={{ fontWeight: 'bold', display: 'block' }}>Category:</label>
        <p style={{ margin: '10px 0' }}>{blog.category}</p>
      </div>
      <hr style={{ backgroundColor: '#efefef', height: '1px', border: 'none' }} />
      <div style={{ marginBottom: '10px', textAlign: 'left' }}>
        <label style={{ fontWeight: 'bold', display: 'block' }}>View:</label>
        <p style={{ margin: '10px 0' }}>{blog.view}</p>
      </div>
    </div>
  );
}

export default BlogDetailSider;
