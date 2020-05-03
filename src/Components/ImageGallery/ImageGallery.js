import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';


// import { v4 as uuidv4 } from 'uuid';

const ImageGallery = ({ onhandleLargeImageUrl, onOpenModal, images }) => {
    return (<ul className={styles.ImageGallery}>
        {images.map(({ id, webformatURL }) => (
            <ImageGalleryItem key={id} url={webformatURL} onOpenModal={onOpenModal} onhandleLargeImageUrl={onhandleLargeImageUrl} />))}

    </ul>
    )
};

ImageGallery.defaultProps = {
    images: [],
};

ImageGallery.propTypes = {
    onhandleLargeImageUrl: PropTypes.func,
    onOpenModal: PropTypes.func,
    images: PropTypes.array.isRequired,
};

export default ImageGallery;
