import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import App from "./components/app";
import ErrorBoundary from "./components/error-boundry";
import BookstoreService from "./services/bookstore-services";
import {BookstoreServicesProvider} from './components/bookstore-service-context';

import store from "./store";

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
			<ErrorBoundary>
				<BookstoreServicesProvider value={bookstoreService}>
					<Router>
						<App />
					</Router>
				</BookstoreServicesProvider>
			</ErrorBoundary>
		</Provider>,
  document.getElementById('root')
);