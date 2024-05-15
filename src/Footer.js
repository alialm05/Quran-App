import React from 'react';
// fragment needed for xml

export default class Footer extends React.Component {

    render() {
        /*const day = new Date().getDay();
        const Month = new Date().getMonth();
        const year = new Date().getFullYear();*/
        return(
            <div>
                <hr />
                <p className='footer'>Made by {this.props.author} 
                    &#xD;
                    <br/>
                    {this.props.date}
                </p>

            </div>
                
        )

    }
}