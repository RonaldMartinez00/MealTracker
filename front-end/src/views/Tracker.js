import React, { useContext } from 'react';
import Logoutbtn from '../components/logout';
import {CurrentUser} from '../context/currentuser'
//send userID, a date somehow within -> (req.body) within -> try block Tracker
//change getroute within meals controller -> put in try block
//when i receieve date, find way to make specific day the end of the day (11:59pm) and create a new var that gets same day but midnight (12:00 am) 
//NEED THESE 2 to search db for any meal within these 2 dates cuz when defined it comes at diff times. 


function Tracker() {
    const {currentUser}= useContext(CurrentUser);
    try { // just continue error is cus => not done add catch
        const response = await fetch('/meals') 
    
//{currentUser ? <p> {currentUser._id}</p> : null}  calls db info (change _id for diff results)
    return(
        <div>
            {currentUser ? <p> {currentUser._id}</p> : null} 
            <Logoutbtn/>
        </div>


    )
    }
};

export default Tracker;
