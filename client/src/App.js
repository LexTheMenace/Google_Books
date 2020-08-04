import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import { Provider } from './context'
import SearchBar from './components/SearchBar/SearchBar';
import SavedBooks from './components/savedBooks';
import { BrowserRouter as Router, Switch, Route, Link}  from 'react-router-dom'
function App() {
  return (
    <Provider >
       <div className="App">
      <Navbar/>
      <div className='container'>
       
      
      
    <Router>
      <Switch>
        <Route exact path='/saved'>
           <SavedBooks/>
        </Route>
        <Route path='*'>
          <SearchBar/> 
        <BookList/>
          </Route> 
      </Switch>
    </Router>
     </div>
    </div>
    </Provider>
   
  );
}

export default App;
