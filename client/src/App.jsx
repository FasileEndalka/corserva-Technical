/* eslint-disable react/react-in-jsx-scope */
import { Modal } from 'antd';
import { createContext, useEffect, useState } from 'react';
import {
  createItem,
  deleteItem,
  getItem,
  updateItem,
} from './api/itemApi';
import Header from './components/Header/Header.component';
import ItemForm from './components/Form/ItemForm.component';
import TableComp from './components/Table/Table.component';

export const ItemContext = createContext();

const App = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState({
    id: 0,
    orderId: 0,
    itemName: '',
    price: 0,
    quantity: 0,
  });

  const fetchItems = async () => {
    const item = await getItem();
    if (item) return setData(item);
  };

  const updateItemList = async (data, id) => {
    if (isEdit) {
      return await updateItem(data, id).then(() =>
        setToggle((e) => !e)
      );
    } else {
      return await createItem(data).then(() => setToggle((e) => !e));
    }
  };

  const editHandler = (record) => {
    console.log(record, 'is it selected');
    setShowModal(true);
    setSelectedRecord(record);
    setIsEdit(true);
  };
  const deleteHandler = async (record) => {
    return await deleteItem(record).then(() => {
      setToggle((e) => !e);
    });
  };
  useEffect(() => {
    fetchItems();
  }, [toggle]);

  const contextState = {
    data,
    setData,
    editHandler,
    deleteHandler,
    showModal,
    setShowModal,
    updateItemList,
    selectedRecord,
    setSelectedRecord,
    setIsEdit,
    isEdit,
  };
  return (
    <div className="p-20">
      <ItemContext.Provider value={contextState}>
        <Header />
        {data && <TableComp />}
        <Modal open={showModal} footer={null} closable={false}>
          <ItemForm />
        </Modal>
      </ItemContext.Provider>
    </div>
  );
};
export default App;
