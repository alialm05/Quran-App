import React, {Component} from "react";
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

let config = {
  method: 'get',
maxBodyLength: Infinity,
  url: 'https://api.quran.com/api/v4/chapters',
  headers: { 
    'Accept': 'application/json'
  }
};


let state = {chapters: [], reciter: 1};// local state

const DisplayTrack = ({currentTrack}) => {
    
    console.log(currentTrack)
    return (
    <div className="audio-player">
      <audio src={currentTrack} controls/>
    </div>)
  };

export function AudioPlayer () {
    
    let {id} = useParams();
    let chapter = state.chapters[id-1]
    let audio = state.chapters[id-1].audioUrl
    console.log(id)

    return(
            <div>
            <h1 className="chapter-header"> {chapter.name_arabic} </h1>

                <div  className="audio-page">
                <DisplayTrack currentTrack = {audio}/>
                </div>    
            
            </div>
    
          );
  
  };
  


function getList(){ // arrow syntax so it can access other funcs in same class
        
       
    axios(config)
    .then((response) => {
    
        const allChaps = response.data.chapters
        
        //let posts = document.getElementById("list") // get an element you created with an id
        
        //const posts = this.listRef.current; // get element by react Ref we made
    
    
        new Promise(function(resolve, reject) {
    
            allChaps.forEach(function(obj) {
                let configAudio = config
                configAudio.url = `https://api.quran.com/api/v4/chapter_recitations/1/${obj.id}`
                
                axios(configAudio)
                .then((response) => {
                    const url = response.data.audio_file.audio_url
                    //console.log(url)
                    obj.audioUrl = url 
                },
                error => {
                    reject(error)})
                
        })
    
        console.log("done all urls")
            resolve();
            
            /*let li = document.createElement('li')
            //console.log(li)
            li.appendChild(document.createTextNode(`${obj.name_simple} | ${obj.name_arabic}`)) // adds in between tag
            posts.appendChild(li) // ads the li sub element to the postlist element 
            */  
        })
    
        setTimeout(() => {
            //this.setState({chapters: allChaps})
            state.chapters = allChaps   
            console.log("set state")
        }, 500)
    
    })
    .catch((error) => {
    console.log(error);
    });

}


const clickedItm = (x) => {
console.log(x);
}

getList();
/*<a href = {c.audioUrl} rel= 'noreferrer' target="_blank" onClick={() => clickedItm(c.audioUrl)}>*/
export function AppContent() {

    //state = {chapters: [], reciter: 1};// local state

    /*constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }*/


        return(
                <div>
                
                {/*<button className="btn-primary">
                    <a href='https://www.youtube.com' target="_blank" rel="noreferrer">
                    </a>
                    button 1
                </button>*/}

                <div className="table">

                    {state.chapters.map((c) => (
                        
                        
                        <div key={c.id} className="chapter">
                            <Link to={`/chapters/${c.id}`} className="nav-link">
                            {c.name_simple} | {c.name_arabic}
                            </Link>
                            
                        </div>     
                        
                       
                    

                        
                    ))}
                </div>

                </div>
            
                
        );

}

export default {
    AppContent,
    AudioPlayer
}