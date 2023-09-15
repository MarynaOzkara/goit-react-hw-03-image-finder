import { Component } from "react";
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from "./Button/Button";
import {getImages} from '../api/pixabay-api';


export class App extends Component {
  state = {
      query: '',
      page: 1,
      images: null,
      totalImages: 0,
      
  }

  componentDidUpdate(prevProps, prevState){
    const {query} = this.state;
    if(prevState.query !== query) {
      getImages(query)
      .then(({hits, total, totalHits}) => {
        console.log(hits, totalHits, total)
        const imagesArray = hits.map(hit => ({
          id: hit.id,
          webformatURL: hit.webformatURL,
          tags: hit.tags,
          largeImageURL: hit.largeImageURL,
        }));
        this.setState({
          page: 1,
          images: imagesArray,
          totalImages: totalHits,
        })
        
      })   
      .catch()
    }; 
  }

  createSearchQuery = (searchQuery) =>{
    console.log(searchQuery);
    this.setState({
      query: searchQuery, 
    })
  }
  loadMoreImages = () => {
    this.setState(({page}) => ({page: page + 1}))
  }
  render() {
        const {images} = this.state;
    return (
      <>
        <Searchbar createSearchQuery={this.createSearchQuery}/>
        {images && <ImageGallery images={images}/>}
         <Button onClick={this.loadMoreImages}/> 
        
      </>
    )
  } 
};

