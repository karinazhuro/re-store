const booksLoaded = (newBooks) => {
	return {
		type: 'FETCH_BOOK_SUCCESS',
		payload: newBooks,
	};
};

const booksRequested = () => {
	return {
		type: 'FETCH_BOOKS_REQUEST',
	};
};

const booksError = (error) => {
	return {
		type: 'FETCH_BOOKS_FAILURE',
		payload: error,
	};
};

const fetchBooks = (bookstoreService, dispatch) => () => {
	dispatch(booksRequested());
	bookstoreService.getBooks()
		.then((data) => booksLoaded(data))
		.catch((err) => booksError(err));
};

export {
	fetchBooks,
};