import React from 'react';
import ReactDOM from 'react-dom';
// Create a new component. This component shuuld produce
// some HTML

const App = () =>  {
	return <div>Hi!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'))

