import React from "react";
import "./Home.css";
import { useAuthContext } from "../../context/AuthContext";
import { useAuthStatus } from "../../hooks/useAuthStatus";
function Home() {
    const {user} =useAuthContext()
    const {loggenIn}=useAuthStatus()
    console.log(loggenIn)
  return (
    <div className="home">
      <div className="desc">    
            <h1>What do you need help with?</h1>
            <p>Please choose from an Option Below</p>
        </div>
        <div className="options">
            <a href="/createTicket">Create a new Ticket</a>
            <a href="/viewTicket">View My Ticket</a>
        </div>
    </div>
  );
}

export default Home;
