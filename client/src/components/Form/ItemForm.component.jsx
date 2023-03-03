import { Input, Button, Form } from 'antd';
import React, { useContext, useEffect } from 'react';
import { ItemContext } from '../../App';

const ItemForm = () => {
  const context = useContext(ItemContext);
  const [form] = Form.useForm();
  const handleOnFinish = (values) => {
    const updated = {
      ...values,
      orderId: Number(values.orderId),
      price: Number(values.price),
      quantity: Number(values.quantity),
    };
    context.updateItemList(updated, context.selectedRecord.id);
    context.setShowModal(false);
    form.resetFields();
  };

  useEffect(() => {
    form.resetFields();
  }, [context.showModal]);

  return (
    <div className="flex items-center justify-center flex-col w-auto flex-1">
      <div className="text-lg font-bold p-6 ">
        {context.isEdit ? `Update` : `Create`} Sales Item
      </div>
      {console.log(context.selectedRecord, 'context.selectedRecord')}
      <Form
        form={form}
        onFinish={handleOnFinish}
        initialValues={context.selectedRecord}
      >
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Form.Item
              label="Order Id"
              name="orderId"
              rules={[
                {
                  required: true,
                  message: 'Please input Order Id!',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="Item Name"
              name="itemName"
              rules={[
                {
                  required: true,
                  message: 'Please input name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="Item Price"
              name="price"
              rules={[
                {
                  required: true,
                  message: 'Please input price!',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="Item Quantity"
              name="quantity"
              rules={[
                {
                  required: true,
                  message: 'Please input quantity!',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
          </div>
        </div>
        <Form.Item>
          <div className="flex flex-row items-center justify-center gap-6 p-6">
            {' '}
            <div>
              <Button
                onClick={() => {
                  form.resetFields();
                  context.setShowModal(false);
                }}
              >
                Cancel
              </Button>
            </div>
            <div>
              <Button
                className="bg-red-900 text-white"
                htmlType="submit"
                data-testid="create/update"
              >
                {context.isEdit ? 'Update' : 'Create'}
              </Button>
            </div>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export default ItemForm;
