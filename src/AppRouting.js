import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppContent from './AppContent'

import './index.css'

export default function AppRouting(){
return(

        <Router>

            <nav className='nav'>
              <ul className='list-group'>
                <li className='list-group'>
                  <Link to="/">
                  Home 1
                  </Link>
                </li>
              </ul>
            </nav>

            <Routes>
                <Route path="/" element = {<Header/>}/>
            </Routes>
        </Router>
        );
    
}

function Home(){
    return(
        <h1>Home</h1>
    );
}

function Header() {

        return(
          <div className='mainHeader'>
            
            <h1 className='header'>Quran App</h1>
                      
              <p className="header">
                  Listen to Recitations for free
              </p>

          
          </div>


  
        )
}