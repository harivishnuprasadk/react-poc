import { render, screen } from '@testing-library/react';
import App from './App';
import Landing from './components/Landing/Landing';

test('renders Landing component', () => {
  render(<Landing />);
  const linkElement = screen.getByText(/Who's watching?/i);
  expect(linkElement).toBeInTheDocument();
});
