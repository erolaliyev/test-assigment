import Modal from '../Modal';
import mockData from '../../../mockData';
import { screen, render, fireEvent } from '@testing-library/react';

const setModalOpen = jest.fn();

beforeEach(() =>
  render(<Modal setOpenModal={setModalOpen} itemData={mockData[0]} />)
);

test('should render image in modal window', () => {
  const element = screen.getByAltText('Shoe photo in modal window');
  expect(element).toBeInTheDocument();
});

test('should close modal when clicked', () => {
  const closeButton = screen.getByRole('button', { name: 'Close' });
  fireEvent.click(closeButton);
  expect(setModalOpen).toBeCalledTimes(1);
});

test('should display title', () => {
  expect(screen.getByText('Shoe 1')).toBeInTheDocument();
});

test('should display currency', () => {
  expect(screen.getByText('USD')).toBeInTheDocument();
});

test('should display price', () => {
  expect(screen.getByText(1)).toBeInTheDocument();
});

test('should display brand', () => {
  expect(screen.getByText('Nike')).toBeInTheDocument();
});

test('should display button link', () => {
  expect(screen.getByText('View in store')).toHaveAttribute(
    'href',
    'https://example.com/'
  );
});
