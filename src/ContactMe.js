import React from 'react'
import './ContactMe.css'
class ContactMe extends React.Component {
    constructor(props){
        super(props)
        
    }

    render(){
        return(
                <div className="contact">
                    <form action="mailto:smm9308@gmail.com" method="post" enctype="text/plain">
                        <label>Name:</label><br />
                        <input type="text" name="name" /><br />
                        <label>E-mail:</label><br />
                        <input type="text" name="mail" /><br />
                        <label>Message:</label><br />
                        <input type="text" name="comment" className="message-input" /><br />
                        <input type="submit" value="Send" className="form-button" />
                        <input type="reset" value="Reset" className="form-button" />
                    </form>
                    <a  href="https://www.linkedin.com/in/sebastian-mu%C3%B1oz-mora-70799863/"><img src="linked_icon.png" className="icon"></img></a>
                    <a  href="https://github.com/SebastianMunozMora"><img src="github.png" className="icon"></img></a>
                </div>
        )
    }

}
export default ContactMe;