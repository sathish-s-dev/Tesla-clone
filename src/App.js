import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Header from './components/Header';
// import Details1 from './components/Details1';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}/>

          {/* <Route exact path='/details/second' element={<Details1 />}/> */}
        </Routes>
       </Router>

    </div>
  );
}

export default App;
