import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
// Create a new component. This component shuuld produce
// some HTML
const API_KEY = 'AIzaSyDg-2GI3OThgY9UETmMHw5yXKF1w0HxY9U';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
	// console.log(data);
})

const App = () =>  {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'))

