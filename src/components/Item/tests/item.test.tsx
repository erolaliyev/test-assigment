import Item from '../Item';
import mockData from '../../../mockData';
import { screen, render, fireEvent } from '@testing-library/react';

const setModalOpen = jest.fn();
const setModalData = jest.fn();

beforeEach(() => {
  render(
    <Item
      setOpenModal={setModalOpen}
      setClickedData={setModalData}
      item={mockData[0]}
    />
  );
});

test('should render image', () => {
  const element = screen.getByAltText('Shoe photo');
  expect(element).toBeInTheDocument();
});

test('should open modal when clicked', () => {
  const element = screen.getByAltText('Shoe photo');
  fireEvent.click(element);
  expect(setModalOpen).toHaveBeenCalledTimes(1);
  expect(setModalData).toHaveBeenCalledTimes(1);
});
