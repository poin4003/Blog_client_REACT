import React, { useState } from 'react';
import { Button, Select, Form, Input, notification } from 'antd';
import { useBlogContext } from '../../contexts/BlogContext';

const { Option } = Select;

const CreateBlogSider = () => {
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const { addBlog, formData, formImage, setFormData, setFormImage, createForm, blogNotFilted } = useBlogContext();
  const [form] = Form.useForm();

  const handleCreate = () => {
    const newId = blogNotFilted.length ? Math.max(...blogNotFilted.map(blog => blog.id)) + 1 : 1;
    console.log(newId);
    const newBlog = {
      ...formData,
      id: newId,
      category,
      author,
      createOn: new Date().toISOString().split('T')[0],
      view: 0,
      image: formImage,
    };
    addBlog(newBlog);
    notification.success({
      message: 'Blog created successfully',
      description: 'Your blog has been created successfully!',
      duration: 5,
    });
    setFormData({});
    setFormImage('');
    setCategory('');
    setAuthor('');
    form.resetFields();
    createForm.resetFields(); // Reset form trong CreateBlog
  };

  return (
    <Form
      form={form}
      layout="vertical"
      style={{
        margin: '60px 0px',
        border: '1px solid #efefef',
        borderRadius: '10px',
        background: 'white',
      }}
    >
      <div style={{ padding: '20px' }}>
        <h3>Input</h3>
        <hr style={{ backgroundColor: '#efefef', height: '1px', border: 'none' }} />
        <Form.Item label="Category" style={{ marginBottom: '20px' }}>
          <Select
            placeholder="Category"
            value={category}
            onChange={(value) => setCategory(value)}
            style={{ width: '100%' }}
          >
            <Option value="Technology">Technology</Option>
            <Option value="Aerospace">Aerospace</Option>
            <Option value="Science Fiction">Science Fiction</Option>
          </Select>
        </Form.Item>
        <hr style={{ backgroundColor: '#efefef', height: '1px', border: 'none' }} />
        <Form.Item label="Author" style={{ marginBottom: '20px' }}>
          <Input
            placeholder="Type author..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Item>
        <Button type="primary" size={'large'} style={{ width: '100%' }} onClick={handleCreate}>
          Create
        </Button>
      </div>
    </Form>
  );
};

export default CreateBlogSider;
