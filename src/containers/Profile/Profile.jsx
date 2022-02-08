
import React from "react";
import "./Profile.scss";

const Profile = (props) => {
  const {images} = props
  const ImageCard = images.map((image,index) => {
    return (
      <div key = {"Image " + index}>
      <img src= {image.url} className="profile__image"/>

       
      </div>
    )
       
  })

  return (
  <div className="profile" >
    
    {ImageCard}
  </div>
  )
 
}

export default Profile