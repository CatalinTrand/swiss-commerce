import React from "react";
import useProducts from "../../contexts/productsContext/useProductsContext";
import {Box, Grid, Slider, Typography} from "@mui/material";
import testIds from "../../componentTestIds";

const Filters = () => {
    const { possiblePrices, filters, setFilters } = useProducts();

    const handleSliderChange = React.useCallback(([min, max]: [number,number]) => {
        setFilters({
            minPrice: min,
            maxPrice: max,
        })
    }, [setFilters])

    return (
        <Grid item xs={7} container data-testid={testIds.components.filter.wrapper}>
            <Grid item xs={12}>
                <Typography fontSize={14} color='rgba(0,0,0,0.6)' >Filter by price</Typography>
            </Grid>
            <Grid item xs={12} container flexDirection='row' spacing={2} alignItems='center'>
                <Grid item xs={2}>
                    <Typography>{possiblePrices.min}€</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Slider
                        getAriaLabel={() => 'Filter by price'}
                        value={[filters?.minPrice ?? 0, filters?.maxPrice ?? 0]}
                        onChange={(_ignored, value) => handleSliderChange(value as [number, number])}
                        min={possiblePrices.min}
                        max={possiblePrices.max}
                        step={10}
                        valueLabelFormat={(value) => `${value}€`}
                        valueLabelDisplay='auto'
                        disableSwap
                    />
                </Grid>
                <Grid item xs={2}>
                    <Typography>{possiblePrices.max}€</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Filters;