import { render, screen } from '@testing-library/react';
import { ItemContext } from '../../App';
import TableComp from '../Table/Table.component';
import { describe, test, expect, jest } from '@jest/globals';
import React from 'react';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

describe('TableComp', () => {
  test('renders table columns', () => {
    const mockData = [
      {
        orderId: '1',
        itemName: 'Item 1',
        price: 10,
        quantity: 2,
        id: '1',
      },
      {
        orderId: '2',
        itemName: 'Item 2',
        price: 15,
        quantity: 3,
        id: '2',
      },
    ];

    const mockEditHandler = jest.fn();
    const mockDeleteHandler = jest.fn();

    render(
      <ItemContext.Provider
        value={{
          data: mockData,
          editHandler: mockEditHandler,
          deleteHandler: mockDeleteHandler,
        }}
      >
        <TableComp />
      </ItemContext.Provider>
    );

    // Assert that the table columns are rendered with the correct headers
    expect(screen.getByText('Order Id')).toBeInTheDocument();
    expect(screen.getByText('Item Name')).toBeInTheDocument();
    expect(screen.getByText('Item Price')).toBeInTheDocument();
    expect(screen.getByText('Item Quantity')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  // Add additional test cases as needed
});
