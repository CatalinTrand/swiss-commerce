import { render, screen } from '@testing-library/react';
import Sort from '..';
import { SortState } from '../../../common-types';
import { mockedUseProductsReturnValue } from '../../../mocks/mockedTestData';
import { sortStates } from '../../../constants';
import testIds from '../../../componentTestIds';
import useProducts from '../../../contexts/productsContext';
import userEvent from '@testing-library/user-event';

jest.mock('../../../contexts/productsContext')

describe('Sort', () => {
  const mockedUseProducts = jest.mocked(useProducts);

  mockedUseProducts.mockReturnValue(mockedUseProductsReturnValue)

  it('renders successfully', () => {
    render(<Sort />);

    expect(screen.getByTestId(testIds.components.sort.wrapper)).toBeInTheDocument()
  })

  it('select renders with correct test-id, label and options', () => {
    render(<Sort />);

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute('id', testIds.components.sort.select);

    const selectLabel = screen.getByTestId(testIds.components.sort.selectLabel);
    expect(selectLabel).toBeInTheDocument();
    expect(selectLabel).toContain('Sort by');

    // open select
    userEvent.click(selectLabel);

    // all options from the constants file should be present
    expect(screen.getAllByRole('option')).toHaveLength(sortStates.length);

    sortStates.forEach((sortState) => {
      expect(screen.getByText(sortState.label)).toBeInTheDocument();
    })
  })

  it('value and onChange work correctly', () => {
    const sortState: SortState = {
      label: 'Price Ascending',
      value: 'PRICE_ASC',
    };

    const newSortState = sortStates[1];

    const setSort = jest.fn();

    mockedUseProducts.mockReturnValueOnce({
      ...mockedUseProductsReturnValue,
      setSort,
      sort: sortState.value,
    })

    render(<Sort />);

    const select = screen.getByRole('combobox');

    expect(select).toHaveValue(sortState.value);

    // open select
    userEvent.click(select);

    expect(setSort).not.toHaveBeenCalled();

    // change value
    userEvent.selectOptions(select, newSortState.value);

    expect(setSort).toBeCalledTimes(1);
    expect(setSort).toHaveBeenCalledWith(newSortState);
  })
});