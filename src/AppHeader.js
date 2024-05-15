import React, {Component} from 'react';
// fragment needed for xml

export default class Header extends Component {


    constructor(props){
        super(props);
        this.handlePostChange = this.handlePostChange.bind(this)
        
      }
    
      handlePostChange(chapters) {
        this.props.handlePostChange(chapters);
      }

    render() {
        return(
          <div className='mainHeader'>
            
            <h1 className='header'>{this.props.title}</h1>
                      
              <p className="header">
                  Listen to Recitations for free
              </p>

          </div>            
  
        )

    }
}