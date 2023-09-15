import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({webformatURL, tags, largeImageURL}) => (
    <li className={css.galleryItem}>
      <img className={css.galleryImage} src={webformatURL} alt={tags} />
    </li>
)
export default ImageGalleryItem;