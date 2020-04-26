import React from 'react'
import './MySkills.css'
class MySkills extends React.Component {
    constructor(props){
        super(props)
        
    }

    render(){
        return(
                <div className="skills">
                    <table>
                        <tr>
                            <td>
                                <img className="table-img" src="js.png"></img>
                                <p className="table-p">HTML, CSS, Javascript</p>
                            </td>
                            <td>
                                <img className="table-img" src="ruby.png"></img>
                                <p className="table-p">Ruby</p>
                            </td>
                            <td>
                                <img className="table-img" src="rails.png"></img>
                                <p className="table-p">Rails</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="table-img" src="data.png"></img>
                                <p className="table-p">SQL Databases</p>
                            </td>
                            <td>
                                <img className="table-img" src="java.png"></img>
                                <p className="table-p">Java</p>
                            </td>
                            <td>
                                <img className="table-img" src="android.png"></img>
                                <p className="table-p">Android Studio</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="table-img" src="matlab.png"></img>
                                <p className="table-p">Matlab</p>
                            </td>
                            <td>
                                <img className="table-img" src="lab.png"></img>
                                <p className="table-p">Lab View</p>
                            </td>
                            <td>
                                <img className="table-img" src="arduino.png"></img>
                                <p className="table-p">Arduino</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="table-img" src="pd.png"></img>
                                <p className="table-p">Pure Data</p>
                            </td>
                            <td>
                                <img className="table-img" src="react.png"></img>
                                <p className="table-p">React JS</p>
                            </td>
                            <td>
                                <img className="table-img" src="jquery.png"></img>
                                <p className="table-p">JQuery</p>
                            </td>
                        </tr>
                    </table>
                </div>
        )
    }

}
export default MySkills;