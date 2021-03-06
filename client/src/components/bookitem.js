import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Consumer } from '../context'

class OldBookList extends Component {
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
                                                console.log(newBook);                                            
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

export default OldBookList