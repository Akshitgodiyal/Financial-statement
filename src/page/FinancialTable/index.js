import React, { useState } from 'react';
import { Table, Input, Button, Modal, Form } from 'antd';
import { IconPlus, IconExpand } from '@tabler/icons-react';
import SubTable from './SubTable';
import { initialData, initialSubData, staticData } from '../../common/Data';

const FinancialTable = () => {
  const [data, setData] = useState(initialData);
  const [subData, setSubData] = useState(initialSubData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [isAddingSubRow, setIsAddingSubRow] = useState(false);
  const [parentKey, setParentKey] = useState(null);
  const [expandedSubTable, setExpandedSubTable] = useState(null);
  const [isExpandModalVisible, setIsExpandModalVisible] = useState(false);

  const calculateVariance = (row) => row['31-12-2024'] - row['31-12-2022'];

  const calculateVariancePercentage = (row) => ((row['31-12-2024'] - row['31-12-2022']) / row['31-12-2022'] * 100).toFixed(1);

  const handleAddRow = () => {
    form.resetFields();
    setIsAddingSubRow(false);
    setIsModalVisible(true);
  };

  const handleAddSubRow = (key) => {
    form.resetFields();
    setIsAddingSubRow(true);
    setParentKey(key);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (isAddingSubRow) {
        const newSubData = [...(subData[parentKey] || [])];
        newSubData.push({
          key: Date.now().toString(),
          category: values.category,
          '31-12-2021': values['31-12-2021'],
          '31-12-2022': values['31-12-2022'],
          '31-12-2024': values['31-12-2024'],
        });
        setSubData({ ...subData, [parentKey]: newSubData });
      } else {
        const newData = [...data];
        newData.push({
          key: Date.now().toString(),
          category: values.category,
          '31-12-2021': values['31-12-2021'],
          '31-12-2022': values['31-12-2022'],
          '31-12-2024': values['31-12-2024'],
        });
        setData(newData);
      }
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => setIsModalVisible(false);

  const handleExpandSubTable = (record) => {
    setExpandedSubTable(record);
    setIsExpandModalVisible(true);
  };

  const handleExpandModalOk = () => {
    setIsExpandModalVisible(false);
    setExpandedSubTable(null);
  };

  const columns = [
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: 200,
    },
    {
      title: '31-12-2021',
      dataIndex: '31-12-2021',
      key: '31-12-2021',
      width: 150,
    },
    {
      title: '31-12-2022',
      dataIndex: '31-12-2022',
      key: '31-12-2022',
      width: 150,
    },
    {
      title: '31-12-2024',
      dataIndex: '31-12-2024',
      key: '31-12-2024',
      width: 150,
      render: (text, record) => record.key === 'totals' ? text : <span>{text}</span>,
    },
    {
      title: 'Variance',
      key: 'variance',
      width: 150,
      render: (text, record) => {
        const variance = calculateVariance(record);
        const varianceClass = variance >= 0 ? 'text-green-600' : 'text-red-600';
        return <span className={varianceClass}></span>;
      },
    },
    {
      title: 'Variance %',
      key: 'variancePercentage',
      width: 150,
      render: (text, record) => {
        const variancePercentage = calculateVariancePercentage(record);
        const variancePercentageClass = variancePercentage >= 0 ? 'text-green-600' : 'text-red-600';
        return <span className={variancePercentageClass}></span>;
      },
    },
  ];

  // Custom header component to make all headers bold
  const components = {
    header: {
      cell: ({ children }) => <th style={{ fontWeight: "700", background: "#ddebfe",fontSize:"16px" }}>{children}</th>,
    },
  };

  return (
    <div className="p-2 md:p-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <div className="my-5">
        <div className="text-zinc-800 text-3xl font-semibold">Financial Statements</div>
        <div className="text-slate-600 text-xl font-semibold">
          ABC Financials is looking for a solution to provide a data entry interface.
        </div>
      </div>
      <div className=" my-3 flex justify-between items-center">
      <Button variant='outline'
          className="hover:border-gray-500 hover:bg-white
           hover:text-gray-500 border-gray-500
            text-gray-500">Create Role</Button>
        <div className='flex gap-2'>
        <Button variant='outline' 
          className="hover:border-gray-500 hover:bg-white
           hover:text-gray-500 border-gray-500
            text-gray-500">Create Role</Button>
        <Button variant='outline' 
          className="hover:border-gray-500 hover:bg-white
           hover:text-gray-500 border-gray-500
            text-gray-500">Create Role</Button>
      

        </div>
          
        
      

      </div>

      <div className="bg-white p-1 md:p-5 shadow-lg ">


        <div className="p-1 border border-gray-300 overflow-auto">
          <Table
            components={components} // Apply the custom header component
            dataSource={staticData}
            columns={columns}
            pagination={false}
            className="b-4 font-semibold"
         
            rowClassName={(record) => (record.key === 'totals' ? 'font-bold totals-row bg-gray-100' : 'bg-gray-100')}
         
          />
          {data.map(record => (
            <SubTable
              TableDATA={<Table
                components={components} // Apply the custom header component
                dataSource={staticData}
                columns={columns}
                pagination={false}
             
      
              />}
              key={record.key}
              data={subData[record.key] || []}
              setData={(newSubData) => setSubData({ ...subData, [record.key]: newSubData })}
              parentCategory={record.category}
              onExpand={handleExpandSubTable}
            />
          ))}
          <Button
            icon={<IconPlus />}
            onClick={handleAddRow}
            className="mt-2 border-blue-500 text-blue-700 font-bold py-2 px-4 rounded"
          >
            Add Category
          </Button>
        </div>
      </div>

      <Modal
        title={isAddingSubRow ? 'Add Sub-Row' : 'Add Row'}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: 'Please input the category!' }]}
          >
            <Input />
          </Form.Item>
          {/* Add other form fields as needed */}
        </Form>
      </Modal>

      <Modal
        title="Expanded Sub-Table"
        open={isExpandModalVisible}
        onOk={handleExpandModalOk}
        onCancel={handleExpandModalOk}
        width="80%"
        style={{ top: 20 }}
      >
        {expandedSubTable && (
          <SubTable
            data={subData[expandedSubTable.key] || []}
            setData={(newSubData) => setSubData({ ...subData, [expandedSubTable.key]: newSubData })}
            parentCategory={expandedSubTable.category}
          />
        )}
      </Modal>
    </div>
  );
};

export default FinancialTable;
