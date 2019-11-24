import React from 'react'
import './AudioEngineering.css'
class AudioEngineering extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="audio-engineering">
               <h5>{this.props.title}</h5>
                <img src={this.props.src} className="audio-img"></img>
                <p className="audio-p">{this.props.info}</p>
                <hr></hr>
            </div>
        )
    }
}

export default AudioEngineering;