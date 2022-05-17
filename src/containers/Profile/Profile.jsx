
import React from "react";
import "./Profile.scss";

const Profile = (props) => {
  const {username, profilepic, bio, images} = props


  const imageCard = images.map((image,index) => {
    return (
      <div key = {"Image " + index}>
      <img src= {image} className="profile__image"/>

       
      </div>
    )
       
  })
  const userInfo = username.map((name, index) => {
    return (
      <div key = {"Image " + index}>
      <h2> {name} </h2>
      </div>
    )
  })


  return (
  <div className="profile" >

{userInfo}
{imageCard}
    
  </div>
  )
 
}

export default Profile