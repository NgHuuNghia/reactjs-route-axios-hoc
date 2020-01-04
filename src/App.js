import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';
// route
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/post';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch> 
            {/* Switch : chạy từ route theo tuần tự gặp route đúng đầu tiên thì break; */}
            {/* cách 2 : /posts/id */}
            <Route exact path='/' component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }

}

export default App;
