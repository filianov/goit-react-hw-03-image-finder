import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Notification from './Notification/Notification';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from 'react-loader-spinner';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import styles from './App.module.css';

import imagesApi from '../Services/imagesApi';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: '',
    page: 1,
    showModal: false,
    largeImageUrl: null,
  };

  // componentDidMount() {
  //   this.fetchImages()
  // }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    };
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    imagesApi.fetchImagesWithQuery(searchQuery, page).then(images => this.setState(prevState => ({ images: [...prevState.images, ...images], page: prevState.page + 1, }))).catch(error => this.setState({ error: error })).finally(() => this.setState({ loading: false }))
  };

  handleSearchbarSubmit = query => {
    this.setState({ searchQuery: query, page: 1, images: [] })
  };

  handleLargeImageUrl = e => {
    const images = this.state.images;
    const needObj = images.find(image => image.webformatURL === e.target.src);
    this.setState({ largeImageUrl: needObj.largeImageURL })
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }))
  };

  render() {
    const { images, loading, error, showModal, largeImageUrl } = this.state;
    const style = [styles.App];
    return (
      <div className={style}>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        {error && (<Notification message={`Whoops, something went wrong: ${error.message}`} />)}
        {images.length > 0 && <ImageGallery onhandleLargeImageUrl={this.handleLargeImageUrl} onOpenModal={this.toggleModal} images={images} />}
        {loading && <Loader type="Puff"
          color="#00BFFF"
          height={480}
          width={480}
          timeout={3000} />}
        {images.length > 0 && !loading && (<Button onLoadNewImages={this.fetchImages} />)}
        {showModal && (<Modal onClose={this.toggleModal}>
          <img src={largeImageUrl} alt="modal" />
        </Modal>
        )}
      </div>);
  }
};