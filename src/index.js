import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as Storage from './LocalStorage'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faTrashAlt, faPlusSquare, faTimesCircle } from '@fortawesome/free-regular-svg-icons'

/** @param {string} title
 *  @param {string} author
 *  @param {string} pages
 *  @param {boolean} status
 */
function BookObject(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

class InputWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            author: "",
            pages: 0,
            status: false,
            quit: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.name === "status" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(submitCall) {
        if (submitCall === null) {
            this.props.handleBookAdd(null);
            this.setState({quit: true,});
        }
        else if (this.state.title !== "" && this.state.author !== "" && this.state.pages !== undefined) {
            this.props.handleBookAdd(new BookObject(this.state.title, this.state.author, this.state.pages, this.state.status));
            this.setState({quit: true,});
        }

    }

    render() {
        if (this.state.quit) {
            return null;
        }
        else {
            return (
                <div id="input-window">
                    <button id="input-window-cancel" onClick={this.handleSubmit.bind(this, null)}>
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </button>
                    <div className="input">
                        <label>
                            Title: 
                            <input 
                                name="title"
                                type="text"
                                placeholder="What's the title of the book?"
                                onChange={this.handleChange}
                                value={this.state.title}
                            />
                        </label>
                        <label>
                            Author:
                            <input 
                                name="author"
                                type="text"
                                placeholder="What's the name of the author?"
                                onChange={this.handleChange}
                                value={this.state.author}
                            />
                        </label>
                        <label>
                            Page Count:
                            <input 
                                name="pages"
                                type="number"
                                min="1"
                                onChange={this.handleChange}
                                value={this.state.pages}
                            />
                        </label>
                        <label>
                            Reading Status:
                            <input 
                                name="status"
                                type="checkbox"
                                checked={this.state.status}
                                onChange={this.handleChange}
                            />
                        </label>
                        <button className="submit-button" onClick={this.handleSubmit.bind(this, true)}>
                            Submit
                        </button>
                    </div>
                </div>
            );
        }
    }
}

class Book extends React.Component {
    render() {
        /** @type {BookObject} */
        const book = this.props.bookObj;

        return (
            <div className="book" >
                <h2>{book.title}</h2>
                <p>Author: {book.author}</p>
                <p>Page Count: {book.pages}</p>
                <p>Status: {book.status ? "Reading" : "Finished"}</p>
                <div className="book-buttons">
                    <button className="read-button" onClick={() => this.props.handleReadClick(book.title)} >
                        <FontAwesomeIcon icon={faCheckSquare} />
                    </button>
                    <button className="delete-button" onClick={() => this.props.handleDeleteClick(book.title)} >
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        );
    }
}

class Library extends React.Component {
    constructor(props) {
        super(props);

        let books;

        if (Storage.initStorage()) {
            let stored = Storage.getBooksFromStorage();
            books = stored ? stored : [];
        }
        else books = [];

        this.state = {
            /** @type {Array.<BookObject>} */
            books: books,
            addBook: false,
        };

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleReadClick = this.handleReadClick.bind(this);
        this.handleBookAdd = this.handleBookAdd.bind(this);
        this.setBookAdd = this.setBookAdd.bind(this);
    }

    handleDeleteClick(title) {
        const books = [...this.state.books];
        const index = books.findIndex((x) => x.title === title);
        if (index !== -1) {
            books.splice(index, 1);
            this.setState({books: books,});
        }
        Storage.saveToStorage(books);
    }
    handleReadClick(title) {
        const books = [...this.state.books];
        const index = books.findIndex((x) => x.title === title);
        if (index !== -1) {
            books[index].status = !books[index].status;
            this.setState({books: books,});
        }
        Storage.saveToStorage(books);
    }

    handleBookAdd(bookObj) {
        if (bookObj === null) {
            this.setState({addBook: false,});
        }
        else {
            const books = [...this.state.books];
            books.push(bookObj);
            this.setState({books: books, addBook: false,});
            Storage.saveToStorage(books);
        }
    }

    setBookAdd() {
        this.setState({addBook: true});
    }

    render() {
        /** @type {Array.<BookObject>} */
        const books = this.state.books.slice();
        const items = books.map((book) =>
            <Book key={book.title} bookObj={book} handleDeleteClick={this.handleDeleteClick} handleReadClick={this.handleReadClick} />
        );

        return (
            <div className="library">
                {this.state.addBook && <InputWindow handleBookAdd={this.handleBookAdd} />}
                {items}
                <button className="book-adder" onClick={this.setBookAdd}>
                    <FontAwesomeIcon icon={faPlusSquare} />
                </button>
            </div>
        );
    }
}



class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <header>
                    <h1>Your library</h1>
                </header>
                <Library />
                <footer>
                    Made by Rokas Simonavičius<a href="https://github.com/Lycanthoss">(@Lycanthoss GitHub) </a> using the React framework
                </footer>
            </div>
        );
    }
}

ReactDOM.render(
    <Main/>, document.getElementById("root")
);