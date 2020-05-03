import axios from 'axios';
import PropTypes from 'prop-types';


const fetchImagesWithQuery = (searchQuery, page = 1) => {
    return axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${'16242873-c667df57b0e10acd3200aaddf'}&image_type=photo&orientation=horizontal&per_page=12
`).then(responce => responce.data.hits);
};

fetchImagesWithQuery.proptypes = {
    searchQuery: PropTypes.string,
    page: PropTypes.number.isRequired
};


export default { fetchImagesWithQuery };