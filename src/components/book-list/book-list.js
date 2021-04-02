import React, {Component} from 'react';
import {connect} from "react-redux";
import {withBookstoreService} from '../hoc';
import BookListItem from "../book-list-item";
import {booksLoaded, booksRequested, booksError} from "../../actions";

import './book-list.css';
import compose from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class BookList extends Component {
	componentDidMount() {
		this.props.fetchBooks();
	}

	render() {
		const {books, loading, error} = this.props;

		if (loading) {
			return <Spinner />;
		}

		if (error) {
			return <ErrorIndicator />;
		}

		return (
			<ul className='book-list'>
				{
					books.map((book) => {
						return (
							<li key={book.id}><BookListItem book={book}/></li>
						);
					})
				}
			</ul>
		);
	};
}

const mapStateToProps = ({books, loading, error}) => {
	return {books, loading, error};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const {bookstoreService} = ownProps;

	return{
		fetchBooks: () => {
			booksRequested();
			bookstoreService.getBooks()
				.then((data) => booksLoaded(data))
				.catch((err) => booksError(err));
		}
	}
};

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList);