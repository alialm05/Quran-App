import React, {Component} from "react";
import axios from 'axios'
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

let config = {
  method: 'get',
maxBodyLength: Infinity,
  url: 'https://api.quran.com/api/v4/chapters',
  headers: { 
    'Accept': 'application/json'
  }
};




export default class AppContent extends Component {

    constructor(props){ // init function
        super(props);
        this.handlePostChange = this.handlePostChange.bind(this)
      }
    
      handlePostChange(chapters) {
        this.props.handlePostChange(chapters);
      }

    state = {chapters: [], reciter: 1};// local state

    /*constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }*/

    componentDidMount(){
        this.getList()
    }

    getList = () =>{ // arrow syntax so it can access other funcs in same class
        
       
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
                this.setState({chapters: allChaps})
                //this.handlePostChange(allChaps)    
                console.log("set state")
                console.log(this.state)
            }, 500)
        
        })
        .catch((error) => {
        console.log(error);
        });

    }

    clickedItm = (x) => {
        console.log(x)
    }

    render() {

        //this.getList();

        return(
                <div>

                {/*<button className="btn-primary">
                    <a href='https://www.youtube.com' target="_blank" rel="noreferrer">
                    </a>
                    button 1
                </button>*/}

                <div className="table">

                    {this.state.chapters.map((c) => (
                        <a href = {c.audioUrl} rel= 'noreferrer' target="_blank" onClick={() => this.clickedItm(c.audioUrl)}>
                        <div key={c.id} className="chapter">
                            {c.name_simple} | {c.name_arabic}
                        </div>        
                        </a>
                        
                    ))}

                </div>

                </div>
            
                
        );
    }

}
