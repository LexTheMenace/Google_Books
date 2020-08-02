import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import { Provider } from './context'
import SearchBar from './components/SearchBar/SearchBar';
function App() {
  return (
    <Provider >
       <div className="App">
      <Navbar/>
      <SearchBar/>
      <BookList/>
    </div>
    </Provider>
   
  );
}

export default App;
