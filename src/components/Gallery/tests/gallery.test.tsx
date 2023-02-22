import Gallery from '../Gallery';
import { getImagesData } from '../../../services';
import { server, rest } from '../../../testServer';
import { screen, render } from '@testing-library/react';

beforeEach(() => {
  render(<Gallery />);
});

test('should render images data', async () => {
  const element = await screen.findAllByAltText('Shoe photo');
  expect(element.length).toEqual(3);
});

test('should handle errors', async () => {
  server.use(
    rest.get('http://localhost:8080/data.json', (req, res, ctx) => {
      return res(ctx.status(404));
    })
  );
  await expect(getImagesData()).rejects.toThrow('404');
});

test('should display title', () => {
  const element = screen.getByText('Sole');
  expect(element).toBeInTheDocument();
});
