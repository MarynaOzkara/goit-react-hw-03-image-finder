import { Component } from "react";
import Searchbar from './Searchbar/Searchbar';
import {getImages} from '../api/pixabay-api'

export class App extends Component {
  state = {
      query: '',
      page: 1,
      images: [],
      
  }

  componentDidUpdate(prevProps, prevState){
    const {query} = this.state;
    getImages(query)
    .then(({hits, total, totalHits}) => 
      console.log(hits, totalHits, total))
    .catch()
  }
  createSearchQuery = (searchQuery) =>{
    console.log(searchQuery);
    this.setState({
      query: searchQuery, 
    })

  }
  render() {
    return (
      <>
        <Searchbar createSearchQuery={this.createSearchQuery}/>

        
      </>
    )
  } 
};

