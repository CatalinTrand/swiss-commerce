import { render, screen } from '@testing-library/react';
import LoadingSpinner from '..';
import testIds from '../../../componentTestIds';

describe('LoadingSpinner', () => {
  it('renders correctly', () => {
    render(<LoadingSpinner/>);

    const spinner = screen.getByTestId(testIds.components.loadingSpinner);

    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('loading-spinner');
  });
})