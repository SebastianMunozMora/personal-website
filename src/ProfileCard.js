import React from 'react'
import './ProfileCard.css'
class ProfileCard extends React.Component {
    render(){
        return(
            <div className="profile-card">
                <img src="./pro_pic.jpg" className="profile-img"></img>
            </div>
        )
    }
}

export default ProfileCard;