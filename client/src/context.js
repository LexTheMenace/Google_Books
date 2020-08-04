import React, { Component } from 'react'
import axios from 'axios';

//Makes info available everywhere in the app
const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_BOOKS': 
        return{
            ...state,
            book_list: action.payload,
            header: "Search Results"
        };
        default: 
        return state;
    }
}

export class Provider extends Component {
    state = {
        book_list: [ ],
        header: "All Books",
        dispatch: action => this.setState(state => reducer(state, action))
    };
//Grabs from Db and this state
 /*    componentDidMount() {
        axios.get('/api/books')
            .then(res => {
                console.log(res.data)
            this.setState({book_list: [...this.state.book_list, res.data]})
            console.log(this.state.book_list);
            }) 
            .catch(err => console.log(err)) 
    } */
    
    componentDidMount() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=&key=AIzaSyDHagYFaIRvhhLUO1tCRVAjVhE3pX-6U2E`)
            .then(res => {
               res.data.items.map(item => {
                    console.log(item);
                        if (!item.volumeInfo.imageLinks.thumbnail) {
                            item.volumeInfo.imageLinks.thumbnail = "https://via.placeholder.com/150"
                            return item.volumeInfo.imageLinks.thumbnail                                                                  
                        }  else {
                            return item.volumeInfo.imageLinks.thumbnail
                         }})
            this.setState({book_list:res.data.items})
            }) 
            .catch(err => console.log(err)) 
    }

    render() {
        return (
            // passing state as value to access anywhere you bring this in
        <Context.Provider value={this.state} >
            {this.props.children}
        </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;