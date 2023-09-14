import { Component } from "react";
import css from './Searchbar.module.css';

class Searchbar extends Component{
    render(){
        return (
          <header className={css.header}>
            <form>
                <input type="text" />
                <button type="submit">Search</button>
            </form>
          </header>
        )
    }
};
export default Searchbar;