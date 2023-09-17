import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({images, openModal}) => (
  images.map(({id, webformatURL, tags, largeImageURL}) => (
    <li className={css.galleryItem} key={id}>
        <img className={css.galleryImage} 
          src={webformatURL} 
          alt={tags}
          onClick={() => openModal(largeImageURL, tags)}/>
    </li>
  ))

)
ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
      largeImageUrl: PropTypes.string,
    })
  ),
  openModal: PropTypes.func,
}
export default ImageGalleryItem;