import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

class Home extends Component {
  render() {
    return (
      <BrowserRouter>

        <body><div>
          <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/happy">Happy</Link></li>
            <li><Link to="/guilty">Guilty</Link></li>
            <li><Link to="/sleepy">Sleepy</Link></li>
          </nav>
          <Route exact path="/" component={null} />
          <Route path="/guilty" component={Guilty} />
          <Route path="/happy" component={Happy} />
          <Route path="/sleepy" component={Sleepy} />
        </div></body>
      </BrowserRouter>
    )

  }
}

ReactDOM.render(<Home />, document.getElementById('root'));
