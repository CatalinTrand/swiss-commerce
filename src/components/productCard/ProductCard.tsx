import React from "react";
import {Product} from "../../common-types";
import useProductModal from "../../contexts/productModalContext";
import './style.scss';
import testIds from "../../componentTestIds";
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";

interface Props extends Product{}

const ProductCard = (product: Props) => {
    const { name, price, imageUrl, rating, numberOfReviews } = product;
    const { openProductModal } = useProductModal();

    return (
        <Grid item sm={12} md={6} lg={4} xl={3} data-testid={testIds.components.productCard.wrapper}>
            <Card sx={{ width: 375 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={imageUrl}
                    title={name}
                />
                <CardContent>
                    <Typography marginY={1} variant='h3' onClick={() => openProductModal(product)}>{name}</Typography>
                    <Typography marginY={1} variant='h4'>{price}</Typography>
                    <Typography marginY={2}>{rating} ({numberOfReviews})</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ProductCard;