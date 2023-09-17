import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';


const ImageGallery = ({images, openModal}) => (
      <ul className={css.gallery}>
          <ImageGalleryItem images={images} openModal={openModal}/>
      </ul>
)
ImageGallery.propTypes = {
   images: PropTypes.array,
   openModal: PropTypes.func,
}
export default ImageGallery;