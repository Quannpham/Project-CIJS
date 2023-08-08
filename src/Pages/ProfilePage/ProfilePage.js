import React, { useState } from 'react'
import Navigation from "../../Components/Header/Nav/Nav";
import "./ProfilePage.css"

const ProfilePage = () => {
  const profile = useState([
    {
      name:"Quan pham",
      age:18,
      nickname:"@Quan",
    },
  ]);
  return (
    <div>
      <Navigation />
      <h3>Ten: {profile.name}</h3>
      <h4>Tuoi: </h4>
    </div>
  )
}

export default ProfilePage 