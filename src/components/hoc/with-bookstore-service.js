import React from 'react';
import {BookstoreServicesConsumer} from '../bookstore-service-context';

const withBookstoreService = () =>(Wrapped) => {
	return (props) => {
		return (
			<BookstoreServicesConsumer>
				{
					(bookstoreService) => {
						return (<Wrapped {...props}
														 bookstoreService={bookstoreService}/>);
					}
				}
			</BookstoreServicesConsumer>
		);
	}
};

export default withBookstoreService;