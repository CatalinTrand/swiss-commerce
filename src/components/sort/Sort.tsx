import React from "react";
import useProducts from "../../contexts/productsContext/useProductsContext";
import testIds from "../../componentTestIds";
import {Box, FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import {sortStates} from "../../constants";
import {SortState} from "../../common-types";

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
                        sortStates.map(({value, label}) => <MenuItem value={value}>{label}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </Grid>
    );
}

export default Sort;