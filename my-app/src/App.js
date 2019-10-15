import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav.jsx'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Nav></Nav>
				<div id="colorlib-main">
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;