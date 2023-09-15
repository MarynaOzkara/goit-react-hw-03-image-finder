import css from './Button.module.css';

const Button = ({loadMoreImages}) => (
    <button type="button" className={css.loadMore} onClick={loadMoreImages}>
        Load more
    </button>
)
export default Button;