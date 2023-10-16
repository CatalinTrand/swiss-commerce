import { render, screen, waitFor } from '@testing-library/react';
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

  it('select renders with correct test-id, label and options', async () => {
    const defaultSortState: SortState = {
      label: 'Price Ascending',
      value: 'PRICE_ASC',
    };

    mockedUseProducts.mockReturnValueOnce({
      ...mockedUseProductsReturnValue,
      sort: defaultSortState.value,
    })

    render(<Sort />);

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute('id', testIds.components.sort.select);

    const selectLabel = screen.getByTestId(testIds.components.sort.selectLabel);
    expect(selectLabel).toBeInTheDocument();
    expect(selectLabel.textContent).toBe('Sort by');

    // open select
    userEvent.click(select);

    expect(await screen.findAllByRole('option')).toHaveLength(sortStates.length);

    sortStates.forEach((sortState) => {
      // all the select option labels appear once, except the currently selected value, which appears both as an option and as the select value
      expect(screen.getAllByText(sortState.label)).toHaveLength(sortState.value === defaultSortState.value ? 2 : 1);
    })
  })

  it('value and onChange work correctly', async () => {
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

    // while the select is not open, only the selected value is visible to the user, so we're checking if we're showing the correct visible value
    expect(screen.getByText(sortState.label)).toBeInTheDocument();
    expect(screen.queryByText(newSortState.label)).not.toBeInTheDocument();

    // open select
    userEvent.click(select);

    // wait for select to open
    expect(await screen.findAllByRole('option')).toHaveLength(sortStates.length);

    expect(setSort).not.toHaveBeenCalled();

    // change value (we're using findByText to wait for the options to render)
    userEvent.click(await screen.findByText(newSortState.label));

    await waitFor(() => expect(setSort).toBeCalledTimes(1));
    expect(setSort).toHaveBeenCalledWith(newSortState.value);
  })
});