import React from "react";
import {Box, Button, Grid, Modal, Typography} from "@mui/material";
import useProductModal from "../../contexts/productModalContext";
import componentTestIds from "../../componentTestIds";
import './style.scss';
import {Close} from "@mui/icons-material";

const ProductModal = () => {
    const { isProductModalOpen, displayedProduct, closeProductModal } = useProductModal();

    return (
        <Modal
            open={isProductModalOpen}
            onClose={closeProductModal}
            data-testid={componentTestIds.components.productModal.wrapper}
        >
            <div className='modal-container'>
                <div className='modal--body'>
                    <div className='modal--body--top'>
                        <Button onClick={() => closeProductModal()}>
                            <Close/>
                        </Button>
                    </div>
                    <div className='modal--body--content'>
                        <h3>{displayedProduct?.name}</h3>
                        <h4>{displayedProduct?.price}€</h4>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ProductModal;