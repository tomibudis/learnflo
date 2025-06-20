import { render, screen } from '@testing-library/react';
import DashboardPage from '@/app/dashboard/page';

describe('DashboardPage', () => {
  it('renders dashboard heading', () => {
    render(<DashboardPage />);
    const headings = screen.getAllByText(/Dashboard/i);
    expect(headings.length).toBeGreaterThan(0);
  });
});
