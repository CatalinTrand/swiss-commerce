import { Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import { Product } from '../../common-types';
import React from 'react';
import styles from './ProductCard.module.scss';
import testIds from '../../componentTestIds';
import useProductModal from '../../contexts/productModalContext';

interface Props extends Product {
}

const ProductCard = (product: Props) => {
  const { name, price, imageUrl, rating, numberOfReviews } = product;
  const { openProductModal } = useProductModal();

  return (
    <Grid item sm={12} md={6} lg={4} xl={3} data-testid={testIds.components.productCard.wrapper}>
      <Card elevation={2}>
        <CardMedia
          sx={{ backgroundSize: 'contain', height: 140, margin: 1 }}
          image={imageUrl}
          title={name}
        />
        <CardContent className={styles.productCardCardContent} onClick={() => openProductModal(product)}>
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
                <Rating name="read-only" value={rating} readOnly/>
              </Grid>
              <Grid item>
                <Typography>({numberOfReviews} reviews)</Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ backgroundColor: 'lightgray' }}>
          <Button color='primary' variant='contained' fullWidth>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProductCard;