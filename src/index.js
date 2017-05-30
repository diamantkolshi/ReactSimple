import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
// Create a new component. This component shuuld produce
// some HTML


const API_KEY = 'AIzaSyDg-2GI3OThgY9UETmMHw5yXKF1w0HxY9U';

const App = () =>  {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'))

