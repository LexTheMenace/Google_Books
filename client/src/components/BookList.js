import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Consumer } from '../context'
import axios from 'axios';

class BookList extends Component {
    //Move onclick function to here and add an axios.post to the books db!
    saveBook = (newBook) => {
        console.log(newBook);
        axios.post(`api/books`, { newBook })
         .then(res => {
           console.log("Book Save Successful!");
           console.log(res.data);
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
                                                    <img src={book.volumeInfo.imageLinks.thumbnail}/>
                                                    <br />
                                                    <br />
                                           Title: {book.volumeInfo.title}
                                                    <br />
                                                    <br />
                                           Authors: {book.volumeInfo.authors}
                                                    <br />
                                                    <br />
                                            Desc:<p>{book.volumeInfo.description}</p>
                                                    <br />
                                                    <br />
                                           Link:  <a href={book.volumeInfo.previewLink} target='blank'> View on Google</a>
                                                    <br />
                                                    <br />
                                                    <Button
                                                    onClick={() => {
                                                const newBook = {
                                                    id: book.id,
                                                    title: book.volumeInfo.title,
                                                    description: book.volumeInfo.description,
                                                    authors: book.volumeInfo.authors,
                                                    link: book.volumeInfo.previewlink  
                                                }      
                                                this.saveBook(newBook)                                          
                                                    }}
                                                    ></Button>
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

export default BookList;