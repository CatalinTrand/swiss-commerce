import { Button, Modal } from '@mui/material';
import { Close } from '@mui/icons-material';
import React from 'react';
import componentTestIds from '../../componentTestIds';
import styles from './ProductModal.module.scss';
import useProductModal from '../../contexts/productModalContext';

const ProductModal = () => {
  const { isProductModalOpen, displayedProduct, closeProductModal } = useProductModal();

  return (
    <Modal
      open={isProductModalOpen}
      onClose={closeProductModal}
      data-testid={componentTestIds.components.productModal.wrapper}
    >
      <div className={styles.modalContainer}>
        <div className={styles.modalBody}>
          <div className={styles.modalBodyTop}>
            <Button onClick={() => closeProductModal()}>
              <Close/>
            </Button>
          </div>
          <div className={styles.modalBodyContent}>
            <h3>{displayedProduct?.name}</h3>
            <h4>{displayedProduct?.price}€</h4>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ProductModal;