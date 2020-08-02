import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Consumer } from '../context'

class BookList extends Component {
    /*  componentDidMount() {
         this.props.getItems();
     }
  */
    render() {

        return (
            <Consumer>
                {value => {
                    const { book_list } = value
                    console.log(value);
                    return (
                        <React.Fragment>
                            <Container>
                                <Button
                                    color="dark"
                                    style={{ marginBottom: '2rem' }}
                             onClick={() => {
                                    const title = prompt('enter book title')
                                    const author = prompt('enter book author')
                                    const description = prompt('enter book description')
                                    const link = prompt('enter book url')
                                  /*   
                                    if(title) {
                                        this.setState(state => ({
                                            books: [...state.books, {id: (Math.random()), title, author, description, link }]
                                        }))
                                    }   */ 
                                }} >
                                    Add Book
                     </Button>

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
                                            Desc:{book.volumeInfo.description}
                                                    <br />
                                                    <br />
                                           Link:  {book.volumeInfo.infolink}
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

export default BookList;