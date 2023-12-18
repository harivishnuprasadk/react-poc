import { render, screen } from '@testing-library/react';
import Landing from './components/Landing/Landing';

test('renders "Who\'s watching?" label', () => {
  render(<Landing />);
  const labelElement = screen.getByText(/Who's watching?/i);
  expect(labelElement).toBeInTheDocument();
});

test('renders "Manage Profiles" button', () => {
  render(<Landing />);
  const manageProfilesButton = screen.getByText(/Manage Profiles/i);
  expect(manageProfilesButton).toBeInTheDocument();
});
