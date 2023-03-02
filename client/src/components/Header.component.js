import { Button } from 'antd';
import React, { useContext } from 'react';
import { ItemContext } from '../App';

const Header = () => {
  const context = useContext(ItemContext);
  return (
    <div className="flex justify-between pb-2 ">
      <div className="text-lg font-bold">List of sales items</div>
      <div>
        <Button
          className="text-white bg-blue-700"
          onClick={() => {
            context.setShowModal(true);
            context.setSelectedRecord({});
            context.setIsEdit(false);
          }}
        >
          Create Sales Item
        </Button>
      </div>
    </div>
  );
};
export default Header;
