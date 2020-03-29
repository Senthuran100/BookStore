import React from 'react';
import { Card, Table, ButtonGroup, Button } from 'react-bootstrap';
import axios from 'axios';

class BookList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            books:[]
        };
    }

    componentDidMount(){
        axios.get("http://localhost:8081/rest/books")
        .then(response => response.data)
        .then((data)=> {
            this.setState({books:data});
            
        });
        
    }
    render() {
        return (
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
        );
    }

}

export default BookList;