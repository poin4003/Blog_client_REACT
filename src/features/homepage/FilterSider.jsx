import { FilterOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Radio, Select } from 'antd';
import React, { useState } from 'react';
import { useBlogContext } from '../../contexts/BlogContext';

const { Option } = Select;

const FilterSider = () => {
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [createOn, setCreateOn] = useState(null);
  const [sortByView, setSortByView] = useState('ascend');
  const { applyFilters } = useBlogContext();

  const handleFilter = () => {
    applyFilters({ category, author, createOn, sortByView });
  };

  return (
    <Form
      layout="vertical"
      style={{ 
        margin: '60px 0px', 
        border: '1px solid #efefef', 
        borderRadius: '10px',  
        background: 'white'
    }}>
      <div style={{ padding: '20px' }}>
        <h3>Tool</h3>
        <hr style={{ backgroundColor: '#efefef', height: '1px', border: 'none' }} />
        <Form.Item
          label={'Select category'}
          style={{ marginBottom: '20px' }}>
          <Select
            placeholder="Filter by category" 
            value={category}
            onChange={(value) => setCategory(value)}
            style={{width: '100%'}}
          > 
            <Option value="All">All</Option>
            <Option value="Technology">Technology</Option>
            <Option value="Aerospace">Aerospace</Option>
            <Option value="Science Fiction">Science Fiction</Option> 
          </Select>
        </Form.Item>
        <hr style={{ backgroundColor: '#efefef', height: '1px', border: 'none' }} />
        <Form.Item label='Author' style={{ marginBottom: '20px' }}>
          <Input 
            placeholder='type author...'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></Input> 
        </Form.Item> 
        <hr style={{ backgroundColor: '#efefef', height: '1px', border: 'none' }} />
        <Form.Item
          label="Create on"
          name="DatePicker"
        >
          <DatePicker 
            value={createOn} 
            onChange={(date) => setCreateOn(date)}
          />
        </Form.Item>
        <hr style={{ backgroundColor: '#efefef', height: '1px', border: 'none' }} />
        <Form.Item 
          label={'Sort by'}
          style={{ 
            marginBottom: '20px', 
            textAlign: 'left' 
          }}
        >
          <Radio.Group
            onChange={(e) => setSortByView(e.target.value)} 
            value={sortByView}
          >
            <Radio value="ascend">Ascending</Radio>
            <Radio value="descend">Descending</Radio>
          </Radio.Group>
        </Form.Item>
        <Button 
          type="primary" 
          icon={<FilterOutlined />} 
          size={'large'} 
          style={{width:'100%'}} 
          onClick={handleFilter}
        > 
          Filter 
        </Button>
      </div>
    </Form>
  );
}

export default FilterSider;
