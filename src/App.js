import React, {Component} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Bio from './components/Bio';
import Contact from './components/Contact';
//import Todos from './Todos';
//import AddTodo from './AddTodo';

class App extends Component {

  render() {
    return (
     <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path='/' component={Home} exact/>
          <Route path='/bio' component={Bio} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
