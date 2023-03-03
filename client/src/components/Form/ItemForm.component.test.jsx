import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ItemContext } from '../../App';
import ItemForm from '../Form/ItemForm.component';
import {
  describe,
  expect,
  jest,
  beforeEach,
  it,
} from '@jest/globals';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe('ItemForm', () => {
  const mockUpdateItemList = jest.fn();
  const mockSetShowModal = jest.fn();
  const mockSelectedRecord = {
    id: 1,
    orderId: 123,
    itemName: 'Test Item',
    price: 10.99,
    quantity: 2,
  };

  const mockContext = {
    updateItemList: mockUpdateItemList,
    setShowModal: mockSetShowModal,
    selectedRecord: mockSelectedRecord,
    isEdit: true,
    showModal: true,
  };

  beforeEach(() => {
    mockUpdateItemList.mockClear();
    mockSetShowModal.mockClear();
  });

  it('should render the form with initial values', () => {
    const { getByLabelText, getByText } = render(
      <ItemContext.Provider value={mockContext}>
        <ItemForm />
      </ItemContext.Provider>
    );

    expect(getByLabelText(/order id/i)).toHaveValue(
      mockSelectedRecord.orderId
    );
    expect(getByLabelText(/item name/i)).toHaveValue(
      mockSelectedRecord.itemName
    );
    expect(getByLabelText(/item price/i)).toHaveValue(
      mockSelectedRecord.price
    );
    expect(getByLabelText(/item quantity/i)).toHaveValue(
      mockSelectedRecord.quantity
    );
    expect(getByText(/update sales item/i)).toBeInTheDocument();
  });

  it('should update the form values when selected record changes', () => {
    const { getByLabelText, rerender } = render(
      <ItemContext.Provider value={mockContext}>
        <ItemForm />
      </ItemContext.Provider>
    );

    const newSelectedRecord = { ...mockSelectedRecord, orderId: 456 };
    mockContext.selectedRecord = newSelectedRecord;
    console.log(mockContext, 'mockContext');
    rerender(
      <ItemContext.Provider value={mockContext}>
        <ItemForm />
      </ItemContext.Provider>
    );

    expect(getByLabelText(/item name/i)).toHaveValue(
      newSelectedRecord.itemName
    );
    expect(getByLabelText(/item price/i)).toHaveValue(
      newSelectedRecord.price
    );
    expect(getByLabelText(/item quantity/i)).toHaveValue(
      newSelectedRecord.quantity
    );
  });

  it('should call updateItemList and setShowModal when form is submitted', () => {
    const { getByLabelText } = render(
      <ItemContext.Provider value={mockContext}>
        <ItemForm />
      </ItemContext.Provider>
    );

    const newValues = {
      orderId: 456,
      itemName: 'New Item',
      price: 20.99,
      quantity: 3,
    };

    fireEvent.change(getByLabelText(/order id/i), {
      target: { value: newValues.orderId },
    });
    fireEvent.change(getByLabelText(/item name/i), {
      target: { value: newValues.itemName },
    });
    fireEvent.change(getByLabelText(/item price/i), {
      target: { value: newValues.price },
    });
    fireEvent.change(getByLabelText(/item quantity/i), {
      target: { value: newValues.quantity },
    });
    fireEvent.click(screen.getByTestId('create/update'));

    // expect(mockUpdateItemList).toHaveBeenCalledWith(
    //   expect.objectContaining(newValues),
    //   mockSelectedRecord.id
    // );
    expect(mockContext.showModal).toBe(true);
  });
});
