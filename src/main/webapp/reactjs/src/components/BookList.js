import React from 'react';
import { Card, Table, ButtonGroup, Button } from 'react-bootstrap';
import axios from 'axios';

class BookList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            books:[]
        };
        const { isAuthenticated } = props.auth;
    }

    componentDidMount(){
        const accesstoken= localStorage.getItem("accessToken");
        const headers = { 'Authorization': 'Bearer '+accesstoken};
        axios.get("https://localhost:8243/book/1.0.0/books",{ headers })
        .then(response => response.data)
        .then((data)=> {
            this.setState({books:data});
            
        });
    }
    render() {
        return (
            !this.props.auth.isAuthenticated()?(
                <Card className={"border border-dark text-center bg-dark text-white"}>
                    <Card.Header>
                        <h2>Please Sign in to View the Add Book List</h2>
                    </Card.Header>
                </Card>
            ):(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    Book List
                </Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="dark">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>ISBN Number</th>
                                <th>Price</th>
                                <th>Language</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.books.length === 0?
                            <tr align="center">
                                <td colSpan="6">  No Books Available.</td>
                            </tr>:
                            this.state.books.map((book)=>(
                              <tr key={book.id}>
                                 <td>{book.title}</td> 
                                 <td>{book.author}</td> 
                                 <td>{book.isbnNumber}</td> 
                                 <td>{book.price}</td> 
                                 <td>{book.language}</td> 
                                 <td>
                                     <ButtonGroup>
                                     <Button size="sm" variant="warning">Edit</Button>{' '}
                                     <Button size="sm" variant="danger">Delete</Button>
                                     </ButtonGroup>
                                 </td>
                              </tr>  
                            ))
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            )
        );
    }

}

export default BookList;