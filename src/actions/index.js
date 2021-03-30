const booksLoaded = () => {
	return {
		type: 'BOOK_LOADED',
		payload: newBooks,
	};
};

export {
	booksLoaded,
};