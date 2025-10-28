
import React, { useContext } from "react";
import { UserContext } from "../../../context";

const Profile = () => {
  const { user } = useContext(UserContext);
  return <h2>{user ? `Welcome, ${user}` : "No user logged in"}</h2>;
};

export default Profile;
