export const sortStates = [
    {
        value: 'PRICE_ASC' as const,
        label: 'Price Ascending' as const,
    },
    {
        value: 'PRICE_DESC' as const,
        label: 'Price Descending' as const,
    },
    {
        value: 'RATING_ASC' as const,
        label: 'Rating Ascending' as const,
    },
    {
        value: 'RATING_DESC' as const,
        label: 'Rating Descending' as const,
    }
];

export const defaultSortState = sortStates[3];