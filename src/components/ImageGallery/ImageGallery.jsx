import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css'

const ImageGallery = ({images}) => (
    <ul className={css.gallery}>
       {images.map(({id, webformatURL, tags, largeImageURL}) => (
            <ImageGalleryItem
               key={id}
               webformatURL={webformatURL}
               tags={tags}
               largeImageURL={largeImageURL}
            />
           ))}
    </ul>
   
   
   )
export default ImageGallery;