import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Header from './AppHeader.js' // cmponent must be capitalized
import Home from './Home.js';
import Footer from './Footer.js'
import {AppContent, AudioPlayer} from './Chapters.js'

class App2 extends Component {

  
  constructor(props){ // 'lifting the state', make it visible the state for other components
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
  }

  render() {

    const HeaderProps = {
      title: "Quran App",
      author: "Aloushie",
      date: new Date().toDateString(),
      color : "green"
    }

    return (
      <Router>
      <div className='app'>

      <nav className="navbar">
          <div className="lis">
            <a><Link to={'/'} className="nav-link"> Home </Link></a>
            <a><Link to={'/chapters'} className="nav-link">Chapters</Link></a>
          </div>
    </nav>

    <Header {...HeaderProps}/>

      <div className='mainContent'>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/chapters/*' element={<AppContent/>}/>
          <Route path='/chapters/:id' element={<AudioPlayer/>}/>
        </Routes>
        {/*<AppContent handlePostChange={this.handlePostChange} chapters = {this.state.chapters}/>*/}
        
      </div>

      <Footer {...HeaderProps}/>
    
    </div>
    </Router>
    );
  }
}

/*function AudioPlayer () {
    
  let {id} = useParams();
  
  return(
          
        
          <div className="audio-player">
            <h1>  Chapter : {id}</h1>
              <div>
                <DisplayTrack/>
              </div>    
          </div>
        );

};

const DisplayTrack = () => {
  return <div>DisplayTrack content here
    <audio src=''></audio>
  </div>;
};*/


export default App2;