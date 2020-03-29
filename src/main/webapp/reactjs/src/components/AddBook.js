import React from 'react';
import { Card, Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import ToastMessage from './ToastMessage';

class AddBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: '', author: '', coverPhotoURL: '', isbnNumber: '', price: '', language: '' };
        this.state.show=false;
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
    }

    resetBook = () =>{
        this.setState({title: '', author: '', coverPhotoURL: '', isbnNumber: '', price: '', language: ''});
    }

    submitBook=event => {
        event.preventDefault();
        const book ={
            title:this.state.title,
            author: this.state.author,
            coverPhotoURL : this.state.coverPhotoURL,
            isbnNumber : this.state.isbnNumber,
            price : this.state.price,
            language : this.state.language
        }
        axios.post("http://localhost:8081/rest/books",book)
        .then(response =>{
            if(response.data != null){
               this.setState({"show":true});
               setTimeout(() =>  this.setState({"show":false}), 3000 );
            } else{
                this.setState({"show":false});
            }
        })
        this.setState({title: '', author: '', coverPhotoURL: '', isbnNumber: '', price: '', language: ''});
    }

    bookChange=event=> {
        this.setState({
            [event.target.name]: event.target.value

        });
    }

    render() {
        
        const {title, author, coverPhotoURL, isbnNumber, price, language  } = this.state;
        return (
            <div>
             <div style={{"display":this.state.show ? "block":"none"}}>
                <ToastMessage children={{show:this.state.show, message : "Book Saved Successfully"}}/>
             </div>  
             <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    Book List
            </Card.Header>
                <Form onReset={this.resetBook} onSubmit={this.submitBook} id="bookid">
                    <Card.Body>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control autoComplete="off" type="text" name="title" placeholder="Enter Title" className={"bg-dark text-white"} value={title} onChange={this.bookChange} required />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAuthor">
                                <Form.Label>Author</Form.Label>
                                <Form.Control autoComplete="off" required type="text" name="author" placeholder="Enter Author" className={"bg-dark text-white"} value={author} onChange={this.bookChange} />
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCoverPhotoURL">
                                <Form.Label>Cover Photo URL</Form.Label>
                                <Form.Control autoComplete="off" required type="text" name="coverPhotoURL" placeholder="Enter Cover Photo URL" className={"bg-dark text-white"} value={coverPhotoURL} onChange={this.bookChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridISBNNumber">
                                <Form.Label>ISBN Number</Form.Label>
                                <Form.Control autoComplete="off" required type="text" name="isbnNumber" placeholder="Enter ISBN Number" className={"bg-dark text-white"} value={isbnNumber} onChange={this.bookChange} />
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control autoComplete="off" required ype="text" name="price" placeholder="Enter Price" className={"bg-dark text-white"} value={price} onChange={this.bookChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridLanguage">
                                <Form.Label>Language</Form.Label>
                                <Form.Control autoComplete="off" required type="text" name="language" placeholder="Enter Language" className={"bg-dark text-white"} value={language} onChange={this.bookChange} />
                            </Form.Group>
                        </Form.Row>


                    </Card.Body>
                    <Card.Footer>
                        <Button size="sm" variant="success" type="submit"> 
                            Submit
                        </Button>{' '}
                        <Button size="sm" variant="warning" type="reset">
                            Reset
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>  
            </div>  

           
        );
    }

}

export default AddBook;