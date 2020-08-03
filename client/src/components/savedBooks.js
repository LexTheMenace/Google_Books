import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Consumer } from '../context'
import axios from 'axios';

class savedBooks extends Component {
    state = {
        savedBooks: []
    }
    //Move onclick function to here and add an axios.post to the books db!
    saveBook = (newBook) => {
        console.log(newBook);
        axios.get(`api/books`)
         .then(res => {
           console.log("Saved Books!");
           console.log(res.data);
           const savedBooks = res.data
           this.setState({ savedBooks })
         })
     }
    

    render() {

        return (
            <Consumer>
                {value => {
                    const { book_list } = value
                    console.log(value);
                    return (
                        <React.Fragment>
                            <Container>
                               <ListGroup>
                                    <TransitionGroup className='reading-list'>
                                        {book_list.map(book => (
                                            <CSSTransition key={book.id} timeout={500} className='dark'>
                                                <ListGroupItem>
                                                    <Button
                                                        className='remove-btn'
                                                        color='danger'
                                                        size='sm'
                                                    >&times;</Button>
                                                    <img src={book.thumbnail}/>
                                                    <br />
                                                    <br />
                                           Title: {book.title}
                                                    <br />
                                                    <br />
                                           Authors: {book.authors}
                                                    <br />
                                                    <br />
                                            Desc:<p>{book.description}</p>
                                                    <br />
                                                    <br />
                                           Link:  <a href={book.link} target='blank'> View on Google</a>
                                                    <br />
                                                    <br />
                                                </ListGroupItem>
                                            </CSSTransition>
                                        ))}
                                    </TransitionGroup>
                                </ListGroup>
                            </Container>
                        </React.Fragment>

                    )
                }}
            </Consumer>

        )
    }
}

export default savedBooks;