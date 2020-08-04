import React, { Component } from 'react';
import {
    Container, ListGroup, ListGroupItem, Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';

class savedBooks extends Component {
    state = {
        savedBooks: []
    }

    //Move onclick function to here and add an axios.post to the books db!
    componentDidMount() {
        axios.get(`api/books`)
            .then(res => {
                console.log(res);
                const savedBooks = res.data
                this.setState({ savedBooks })
            })
            .catch(err => console.log(err))
    }

      handleDelete = (book) => {
         axios.delete(`api/books/${book._id}`)
             .then(res => {
                 console.log("DELETED");
                 console.log(res.data);
                 this.componentDidMount()
             })
             .catch(err => console.log(err))
     }
  
    render() {
        return (
            <React.Fragment>
                <Container>
                    <ListGroup>
                        <TransitionGroup className='reading-list'>
                            {this.state.savedBooks.map(book => (
                                <CSSTransition key={book.id} timeout={500} className='dark'>
                                    <ListGroupItem>
                                        <Card>
                                            <div className="row no-gutters">
                                                <div className="col-md-4">
                                                    <CardImg style={{maxWidth: '80%'}} top width="100%" src={book.thumbnail} alt="Card image cap" />
                                                </div>
                                                <div className="col-md-8">
                                                    <CardBody >
                                                        <CardTitle><h3>{book.title}</h3> </CardTitle>
                                                        <CardSubtitle>Author: {book.author}</CardSubtitle>
                                                        <CardText>Description: {book.description}</CardText>
                                                        <CardText><a href={book.link} target='blank'> View on Google</a></CardText>
                                                    </CardBody>
                                                </div>
                                            </div>
                                               <Button
                                            className='remove-btn'
                                            color='danger'
                                            size='sm'
                                         onClick={() => {
                                           this.handleDelete(book)
                                         }
                                           }
                                        >REMOVE THIS BOOK</Button>
                                        </Card>
                                     
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
                </Container>
            </React.Fragment>

        )
    }
}
export default savedBooks;