import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer.js'

class App extends Component {
  render() {
    return (
		<div className="App">
			<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Welcome to Timer App</h1>
			</header>
			
			{/* Date.now() : milliseconds count from 1 Jan 1970 */}
			<Timer start={ Date.now() }/>

		</div>
    );
  }
}

export default App;
