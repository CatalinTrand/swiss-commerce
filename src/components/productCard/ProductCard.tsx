import React from "react";
import {Product} from "../../common-types";
import useProductModal from "../../contexts/productModalContext";
import './style.scss';
import testIds from "../../componentTestIds";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography} from "@mui/material";

interface Props extends Product{}

const ProductCard = (product: Props) => {
    const { name, price, imageUrl, rating, numberOfReviews } = product;
    const { openProductModal } = useProductModal();

    return (
        <Grid item sm={12} md={6} lg={4} xl={3} data-testid={testIds.components.productCard.wrapper}>
            <Card elevation={2}>
                <CardMedia
                    sx={{ height: 140, margin: 1, backgroundSize: 'contain' }}
                    image={imageUrl}
                    title={name}
                />
                <CardContent className='product-card--card-content' onClick={() => openProductModal(product)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} container spacing={1} flexDirection='row' alignItems='center'>
                            <Grid item>
                                <Typography variant='subtitle1' fontWeight='bold'>
                                    {name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='h6'>
                                    {price}€
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} container spacing={1} flexDirection='row' alignItems='center'>
                            <Grid item>
                                <Rating name="read-only" value={rating} readOnly />
                            </Grid>
                            <Grid item>
                                <Typography>({numberOfReviews} reviews)</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions sx={{ backgroundColor: 'lightgray'}}>
                    <Button color='primary' variant='contained' fullWidth>
                        Add to cart
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default ProductCard;