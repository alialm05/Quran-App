import React, {Component} from 'react';
import { createRoot } from 'react-dom/client';
//import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import './index.css'; // imports css to react component

//import App from './App'; // returns html
//import reportWebVitals from './reportWebVitals';

// XML component dependencies
import Header from './AppHeader' // cmponent must be capitalized
import Home from './Home.js' // cmponent must be capitalized
import Footer from './Footer'
import AppContent from './Chapters.js'
//import AppRouting from './AppRouting';
import App from './App.js'
import { Route, Router, Routes, Link } from 'react-router-dom';

class App0 extends Component { // Doesnt work in same script

  /*constructor(props){ // 'lifting the state', make it visible the state for other components
    super(props);
    this.handlePostChange = this.handlePostChange.bind(this)
    this.state = {
      chapters: [],
      reciter: 1,
    }
  }

  handlePostChange(chapters){
    this.setState({
      chapters: chapters
    })
  }*/

  render(){

    const HeaderProps = {
      title: "Quran App",
      author: "Aloushie",
      date: new Date().toDateString(),
      color : "green"
    }
    
    return ( // XML uses className instead of class
    <Router>
      <div className='app'>
      <Header {...HeaderProps}/>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/chapters'} className="nav-link">Content</Link></li>
          </ul>
      </nav>

      <div className='mainContent'>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/chapters' element={<AppContent/>}/>
        </Routes>
        {/*<AppContent handlePostChange={this.handlePostChange} chapters = {this.state.chapters}/>*/}
        
      </div>

      <Footer {...HeaderProps}/>
    
    </div>
    </Router>
   
    
  )
}
}


const root = createRoot(document.getElementById('root'));
root.render(<App/>)

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
