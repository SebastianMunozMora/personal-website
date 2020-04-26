import React from 'react'
import './AudioEngineering.css'
import Slider from 'react-simple-slideshow';
import TabBar from './TabBar.js'

class AudioEngineering extends React.Component {
    constructor(props){
        super(props)
        this.items = this.props.items
        this.state = {
            currentItem: this.items[1]
        }
    }
    render(){
        return(
            <div className="audio-engineering">
                {this.items.map((item) => {
                    return(
                        <button className="tabs" onClick={()=>{
                        return(this.setState({currentItem: item}))
                    }}>
                        {item.name}
                        <hr></hr>
                    </button>
                        
                    )

                    
                })}
                <div className="audio-content">
                    <div className="audio">
                        <Slider width= "500px" height="500px">
                            {this.state.currentItem.imgs.map((image)=>{
                                return(
                                    <div >
                                        <img src={image} className="slide-img"></img>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                    <p className="audio-p">{this.state.currentItem.desc}</p>
                </div>
            </div>
        )
    }
}

export default AudioEngineering;