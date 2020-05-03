import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';



function Button({ onLoadNewImages }) {
    return (
        <button className={styles.Button} type="button" onClick={onLoadNewImages}>
            Load more
    </button>)
};

Button.propTypes = {
    onLoadNewImages: PropTypes.func,
};

export default Button;
