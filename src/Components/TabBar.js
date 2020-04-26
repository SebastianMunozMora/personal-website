import React from 'react'
import AudioWave from './AudioWave.js'
import './TabBar.css'
class TabBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentItem: this.props.items[2],
            burgerStatus: true
        }
    }

    render() {
        return (
            <div>
                <button class="burgerMenu" onClick={() => {
                    this.state.burgerStatus ? this.setState({ burgerStatus: false }) : this.setState({ burgerStatus: true })
                }

                }>
                    <div className="burger_line"></div>
                    <div className="burger_line"></div>
                    <div className="burger_line"></div>
                </button>
                <ul className="tabs-container">
                    {this.props.items.map((item) => {
                        if (this.state.burgerStatus) {
                            return (
                                <li>
                                    <button className="tabs" onClick={() => {
                                        this.setState({ currentItem: item })
                                    }}>
                                        <h2>{item.name}</h2>
                                        <hr></hr>
                                    </button>
                                </li>
                            )
                        }
                    })}
                </ul>
                <div id="content">
                    {this.state.currentItem.content}
                </div>
            </div>
        )
    }

}
export default TabBar;