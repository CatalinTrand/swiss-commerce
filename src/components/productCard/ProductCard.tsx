import React from "react";
import {Product} from "../../common-types";

interface Props extends Product{}

const ProductCard = ({productId, name, price, imageUrl, rating, numberOfReviews}: Props) => {
    const { openProductModal, closeProductModal } = useProductContext();

    return (
        <div>
            <span>{name}</span>
            <span>{price}</span>
            <img src={imageUrl} alt={productId}/>
            <div>
                <span>{rating} ({numberOfReviews})</span>
            </div>
        </div>
    );
}

export default ProductCard;