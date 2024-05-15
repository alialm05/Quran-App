import React, {Component} from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import './index.css'; // imports css to react component

//import App from './App'; // returns html
//import reportWebVitals from './reportWebVitals';

// XML component dependencies
import Header from './AppHeader' // cmponent must be capitalized
import Footer from './Footer'
import AppContent from './AppContent'

class App extends Component {

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

  render(){
    
    const HeaderProps = {
      title: "Quran App",
      author: "Aloushie",
      date: new Date().toDateString(),
      color : "green"
    }
    
    return ( // XML uses className instead of class
    <div className='app'>
      
      <div>
      <Header {...HeaderProps}/>
      <AppContent handlePostChange={this.handlePostChange} chapters = {this.state.chapters}/>
      </div>
      <Footer {...HeaderProps}/>
    
    </div>
    
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
