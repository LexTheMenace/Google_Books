import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Consumer } from '../context'
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
class BookList extends Component {
    //Move onclick function to here and add an axios.post to the books db!
    saveBook = (newBook) => {
        console.log(newBook);
        axios.post(`api/books`, { newBook })
            .then(res => {
                console.log("Book Save Successful!");
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Consumer>
                {value => {
                    const { book_list } = value
                    return (
                        <React.Fragment>
                            <Container>
                                <h1>Results</h1>
                                <ListGroup>
                                    <TransitionGroup className='reading-list'>
                                        {book_list.map(book => (
                                            <CSSTransition key={book.id} timeout={500} className='dark'>
                                                <ListGroupItem>
                                                    <Card>
                                                        <div className="row no-gutters">
                                                            <div className="col-md-4">
                                                                <CardImg 
                                                                    style={{maxWidth: '80%'}} 
                                                                    top width="100%" 
                                                                    src={book.volumeInfo.imageLinks.thumbnail}
                                                                    alt="Card image cap" />
                                                            </div>
                                                            <div className="col-md-8">
                                                                <CardBody >
                                                                    <CardTitle><h3>{book.volumeInfo.title}</h3></CardTitle>
                                                                    <CardSubtitle>Written By: {book.volumeInfo.authors}</CardSubtitle>
                                                                    <br/>
                                                                    <CardText>Description: {book.volumeInfo.description}</CardText>
                                                                    <CardText><a href={book.volumeInfo.previewLink} target='blank'> View on Google</a></CardText>
                                                                    <Button
                                                                        onClick={() => {
                                                                            console.log();
                                                                            const { title, description, authors, previewLink } = book.volumeInfo
                                                                            const newBook = {
                                                                                id: book.id,
                                                                                title: title,
                                                                                description: description,
                                                                                authors: authors[0],
                                                                                link: previewLink,
                                                                                thumbnail: book.volumeInfo.imageLinks.thumbnail
                                                                            }
                                                                            this.saveBook(newBook)
                                                                        }}>Save Book</Button>
                                                                </CardBody>
                                                            </div>
                                                        </div>
                                                    </Card>
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