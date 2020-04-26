import React from 'react'
import AudioWave from './AudioWave.js'
import './TabBar.css'
class TabBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentItem : this.props.items[2]
        }
    }

    render(){
        return(
                <div >
                    <div className="tabs-container">
                        {this.props.items.map((item)=>{
                            return(
                                <button className="tabs" onClick = {()=>{
                                    this.setState({currentItem: item})
                                }}>
                                    <h2>{item.name}</h2>
                                    <hr></hr>
                                </button>
                            )
                        })}
                    </div>
                    <div id="content">
                        {this.state.currentItem.content}
                    </div>
                </div>
        )
    }

}
export default TabBar;