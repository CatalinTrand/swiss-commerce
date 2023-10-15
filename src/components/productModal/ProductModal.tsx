import React from "react";
import {Box, Modal, Typography} from "@mui/material";
import useProductModal from "../../contexts/productModalContext";
import componentTestIds from "../../componentTestIds";

const ProductModal = () => {
    const { isProductModalOpen, displayedProduct, closeProductModal } = useProductModal();

    return (
        <Modal
            open={isProductModalOpen}
            onClose={closeProductModal}
            data-testid={componentTestIds.components.productModal.wrapper}
        >
            <Box>
                <Typography variant={'h3'}>{displayedProduct?.name}</Typography>
                <Typography variant={'h4'}>{displayedProduct?.price}</Typography>
            </Box>
        </Modal>
    );
}

export default ProductModal;