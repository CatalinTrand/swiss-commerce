import React from "react";
import {Product} from "../../common-types";
import useProductModal from "../../contexts/productModalContext/useProductModalContext";
import './style.scss';
import testIds from "../../componentTestIds";

interface Props extends Product{}

const ProductCard = (product: Props) => {
    const { productId, name, price, imageUrl, rating, numberOfReviews } = product;
    const { openProductModal } = useProductModal();

    // TODO - add classnames etc
    return (
        <div data-testid={testIds.components.productCard.wrapper}>
            <span onClick={() => openProductModal(product)}>{name}</span>
            <span>{price}</span>
            <img src={imageUrl} alt={productId}/>
            <div>
                <span>{rating} ({numberOfReviews})</span>
            </div>
        </div>
    );
}

export default ProductCard;