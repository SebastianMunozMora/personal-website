import React from 'react'
import './ProfileCard.css'
class ProfileCard extends React.Component {
    render(){
        return(
            <div className="profile-card">
               
                <img src="./pro_pic.jpg" className="profile-img"></img>
                <p className="about-p">
                    
                    I am passionate about coding and music. I started programming algorithms for audio back in college when I was studying Audio Engineering, 
                    later I got interested in Web Development, so I took a Fullstack  certification in Bogota Bootcamp.

                </p>
            </div>
        )
    }
}

export default ProfileCard;