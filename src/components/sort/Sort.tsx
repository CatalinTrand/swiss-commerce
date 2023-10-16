import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { SortState } from '../../common-types';
import { sortStates } from '../../constants';
import testIds from '../../componentTestIds';
import useProducts from '../../contexts/productsContext';

const Sort = () => {
  const { sort, setSort } = useProducts();

  return (
    <Grid item xs={12} sm={5} data-testid={testIds.components.sort.wrapper}>
      <FormControl>
        <InputLabel id={testIds.components.sort.selectLabel}>Sort by</InputLabel>
        <Select
          labelId={testIds.components.sort.selectLabel}
          id={testIds.components.sort.select}
          value={sort}
          label="Sort by"
          onChange={(e) => setSort(e.target.value as SortState['value'])}
        >
          {
            sortStates.map(({ value, label }) => <MenuItem value={value}>{label}</MenuItem>)
          }
        </Select>
      </FormControl>
    </Grid>
  );
}

export default Sort;