import React from "react";
import useProducts from "../../contexts/productsContext/useProductsContext";
import {Box, Slider} from "@mui/material";
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
        <Box data-testid={testIds.components.filter.wrapper}>
            <Slider
                getAriaLabel={() => 'Filter by price'}
                value={[filters?.minPrice ?? 0, filters?.maxPrice ?? 0]}
                onChange={(_ignored, value) => handleSliderChange(value as [number, number])}
                min={possiblePrices.min}
                max={possiblePrices.max}
                step={10}
                valueLabelDisplay="on"
                disableSwap
            />
        </Box>
    );
}

export default Filters;