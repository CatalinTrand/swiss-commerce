import React from "react";
import useProductModal from "../../contexts/productModalContext/useProductModalContext";
import componentTestIds from "../../componentTestIds";

const ProductModal = () => {
    const { displayedProduct, closeProductModal } = useProductModal();

    if(!displayedProduct) return null;

    // TODO - add classnames etc
    return (
        <div data-testid={componentTestIds.components.productModal.wrapper}>
            <div onClick={() => closeProductModal()}>X</div>
            <span>{displayedProduct.name}</span>
            <span>{displayedProduct.price}</span>
        </div>
    );
}

export default ProductModal;