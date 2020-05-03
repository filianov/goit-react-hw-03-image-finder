import React, { Component, createRef } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';


export default class Modal extends Component {
    overlayRef = createRef();

    componentDidMount() {

        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {

        window.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = e => {
        console.log(e);
        if (e.code === 'Escape') {
            console.log('Закрываем модалку с this.props.onClose.');
            this.props.onClose();
        }
    };

    handleOverlayClick = e => {
        const { current } = this.overlayRef;
        if (current && e.target !== current) return;
        this.props.onClose();
    };

    render() {
        return (
            <div className={styles.Overlay} ref={this.overlayRef} onClick={this.handleOverlayClick} onKeyDown={this.handleKeyDown}>
                <div className={styles.Modal}>{this.props.children}</div>
            </div>
        );
    }
};

Modal.propTypes = {
    onClose: PropTypes.func,
};
