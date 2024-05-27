import axios from 'axios'

let config = {
    method: 'get',
  maxBodyLength: Infinity,
    url: 'https://api.quran.com/api/v4/chapters',
    headers: { 
      'Accept': 'application/json'
    }
};

export default function getList(){ // arrow syntax so it can access other funcs in same class
        
       
    axios(config)
    .then((response) => {
    
        const allChaps = response.data.chapters
        
        //let posts = document.getElementById("list") // get an element you created with an id
        
        //const posts = this.listRef.current; // get element by react Ref we made
    
    
        return new Promise(function(resolve, reject) {
    
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
            resolve(allChaps);
            
            /*let li = document.createElement('li')
            //console.log(li)
            li.appendChild(document.createTextNode(`${obj.name_simple} | ${obj.name_arabic}`)) // adds in between tag
            posts.appendChild(li) // ads the li sub element to the postlist element 
            */  
        })
    
        /*setTimeout(() => {
            //this.setState({chapters: allChaps})
            //state.chapters = allChaps   
            console.log("set state")
        }, 500)*/
    
    })
    .catch((error) => {
    console.log(error);
    });


}
