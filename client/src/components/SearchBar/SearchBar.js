import React, { Component } from 'react';
import axios from 'axios';
import { Consumer} from '../../context';

class SearchBar extends Component {
    state = {
        searchTerms: ''
    }
    
    onChange = (e) => {
        const {value, name} = e.target
        this.setState({ [name]: value});
    }

  //Searches DB by params in tools controller, seperate from findByID
     searchTools = (dispatch, e) => {
        e.preventDefault();

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerms}&key=AIzaSyDHagYFaIRvhhLUO1tCRVAjVhE3pX-6U2E`)
        .then(res => {
            console.log(res);
               const books = res.data.items.filter(item => item.volumeInfo.imageLinks)
               this.setState({book_list: books})
        dispatch({
            type: 'SEARCH_BOOKS',
            payload: books
        })
        }) 
        .catch(err => console.log(err))
    }

    render() {

        return (
            <Consumer>
                {value => {
                    //Bring in dispatch to bind to function to change our search results and heading
                   const { dispatch } = value;
                    return (
                        // Can be changed to navbar category search to ensure results?
                        <div className='search-bar'>
                            <h1> Search for Books! </h1>

                            <form  onSubmit={this.searchTools.bind(this, dispatch)}>
                              <div className='form-group'>
                                <input 
                                type="text" 
                                placeholder=""
                                name="searchTerms"
                                className="form-control-file"
                                value={this.state.searchTerms}
                                onChange={this.onChange}
                                ></input>
                                <button className="btn btn-dark" type='submit' style={{padding: "10px", marginTop: '10px'}}>Get Books!</button>  
                              </div>
                                
                            </form>
                        </div>
                    );

                }}
            </Consumer>
        )
    }
}

export default SearchBar
