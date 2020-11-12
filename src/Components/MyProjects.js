import React from 'react'
import './MyProjects.css'
class ProfileCard extends React.Component {
    render(){
        return(
            <div className="profile-card">
               
                <img src="./pro_pic.jpg" className="profile-img"></img>
                <p className="about-p">
                    I am passionate about coding and music. I started programming algorithms for audio back in college when I was studying Audio Engineering, 
                    later I got interested in Web Development and I took course in Bogota Bootcamp focused in Ruby on Rails and React. I have been working in a professional basis as a JavaScript Developer for a year now. 
                </p>
            </div>
        )
    }
}

export default ProfileCard;
