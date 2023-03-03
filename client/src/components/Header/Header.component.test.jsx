import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header/Header.component';
import { ItemContext } from '../../App';
import { describe, test, expect, jest } from '@jest/globals';

describe('Header component', () => {
  test('renders the component', () => {
    render(
      <ItemContext.Provider value={{}}>
        <Header />
      </ItemContext.Provider>
    );
    const headerText = screen.getByText('List of sales items');
    expect(headerText).toBeInTheDocument();
  });

  test('clicking the create button should call the context functions', () => {
    const setShowModal = jest.fn();
    const setSelectedRecord = jest.fn();
    const setIsEdit = jest.fn();

    render(
      <ItemContext.Provider
        value={{
          setShowModal,
          setSelectedRecord,
          setIsEdit,
        }}
      >
        <Header />
      </ItemContext.Provider>
    );

    const createButton = screen.getByText('Create Sales Item');
    fireEvent.click(createButton);

    expect(setShowModal).toHaveBeenCalledWith(true);
    expect(setSelectedRecord).toHaveBeenCalledWith({});
    expect(setIsEdit).toHaveBeenCalledWith(false);
  });
});
