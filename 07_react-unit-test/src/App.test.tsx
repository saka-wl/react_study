
import { fireEvent, render } from '@testing-library/react';
import Toggle from './components/Toggle';

// test('renders learn react link', () => {
//   const { container } = render(<App />);
//   const linkElement = container.querySelector('App-link');
//   expect(linkElement?.textContent).toMatch(/learn react/i);
// });

test('test Toggle Render', () => {
  const { container } = render(<Toggle />);
  expect(container.querySelector('.word')?.textContent).toBe('close');
  fireEvent.click(container.querySelector('button')!);
  expect(container.querySelector('.word')?.textContent).toBe('open');
})

it('limit', () => {
  
})