import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';


export default function ImageGalleryItem({ url, onOpenModal, onhandleLargeImageUrl }) {
    return (
        <li className={styles.ImageGalleryItem} onClick={onOpenModal}>
            <img src={url} alt="pick" onClick={(e) => onhandleLargeImageUrl(e)} className={styles.ImageGalleryItemImage} />
        </li>)
};

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    onOpenModal: PropTypes.func,
    onhandleLargeImageUrl: PropTypes.func,
};