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
                                <img className="table-img"></img>
                                <p className="table-p"></p>
                            </td>
                            <td>
                                <img className="table-img"></img>
                                <p className="table-p"></p>
                            </td>
                            <td>
                                <img className="table-img"></img>
                                <p className="table-p"></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="table-img"></img>
                                <p className="table-p"></p>
                            </td>
                            <td>
                                <img className="table-img"></img>
                                <p className="table-p"></p>
                            </td>
                            <td>
                                <img className="table-img"></img>
                                <p className="table-p"></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="table-img"></img>
                                <p className="table-p"></p>
                            </td>
                            <td>
                                <img className="table-img"></img>
                                <p className="table-p"></p>
                            </td>
                            <td>
                                <img className="table-img"></img>
                                <p className="table-p"></p>
                            </td>
                        </tr>
                    </table>
                </div>
        )
    }

}
export default MySkills;