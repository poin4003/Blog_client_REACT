import React, { useEffect } from 'react';
import { Form, Input, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useBlogContext } from '../../contexts/BlogContext';

const { TextArea } = Input;

const CreateBlog = () => {
  const [form] = Form.useForm();
  const { setFormData, setFormImage, setCreateForm } = useBlogContext();

  useEffect(() => {
    setCreateForm(form); // Lưu form instance vào context khi component mount
  }, [form, setCreateForm]);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setFormImage(e.target.result);
    };
    reader.readAsDataURL(file);
    return false;
  };

  return (
    <Form
      form={form}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 24 }}
      layout="vertical"
      onValuesChange={(changedValues, allValues) => setFormData(allValues)}
    >
      <h2>CREATE BLOG:</h2>
      <Form.Item
        name="dragger"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true, message: 'Please upload an image!' }]}
      >
        <Upload.Dragger
          name="files"
          accept="image/*"
          beforeUpload={handleImageUpload}
          listType="picture"
          showUploadList={{ showRemoveIcon: true }}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag image to this area to upload</p>
          <p className="ant-upload-hint">Support for a single image upload.</p>
        </Upload.Dragger>
      </Form.Item>
      <Form.Item
        name="title"
        rules={[{ required: true, message: 'Please input the title!' }]}
      >
        <Input placeholder="Type title here..." />
      </Form.Item>
      <Form.Item
        name="content"
        rules={[{ required: true, message: 'Please input the content!' }]}
      >
        <TextArea placeholder="Type content here..." rows={4} style={{ minHeight: '280px' }} />
      </Form.Item>
    </Form>
  );
};

export default CreateBlog;

