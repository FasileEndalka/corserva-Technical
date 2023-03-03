import { React, useContext } from 'react';
import { Table, Popconfirm } from 'antd';
import { ItemContext } from '../../App';

const TableComp = () => {
  const columns = [
    {
      title: 'Order Id ',
      dataIndex: 'orderId',
      key: 'orderId',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Item Name',
      dataIndex: 'itemName',
      key: 'itemName',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Item Price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Item Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      render: (text, record) => (
        <div className="flex gap-4">
          <button
            className="text-blue-400"
            onClick={() => context.editHandler(record)}
          >
            Edit
          </button>
          <Popconfirm
            title="Delete"
            description={`Are you sure to delete this "${record.itemName}" ?`}
            onConfirm={() => context.deleteHandler(record)}
            onCancel={() => {}}
            okText={<div className="text-red-400">Yes</div>}
            cancelText={<div className="text-blue-400">No</div>}
          >
            <button className="text-red-400">Delete</button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const context = useContext(ItemContext);
  return (
    <div>
      <Table
        dataSource={context.data}
        columns={columns}
        rowKey={(record) => record.id}
      ></Table>
    </div>
  );
};
export default TableComp;
