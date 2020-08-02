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
        dispatch({
            type: 'SEARCH_BOOKS',
            payload: res.data.items
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
                        <div>
                            <h1> Search for Books! </h1>

                            <form onSubmit={this.searchTools.bind(this, dispatch)}>
                                <input 
                                type="text" 
                                placeholder=""
                                name="searchTerms"
                                value={this.state.searchTerms}
                                onChange={this.onChange}
                                ></input>
                                <button type='submit' style={{padding: "10px"}}>Get Books!</button>
                            </form>
                        </div>
                    );

                }}
            </Consumer>
        )
    }
}

export default SearchBar
