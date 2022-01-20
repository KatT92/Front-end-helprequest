
import React from "react";


function HelpInput({getRequests, getRequestsDate}) {

    let fname = ""
    let date = ""

    return (
        <div>
        <input className="inputField" type="text" placeholder="Please enter a name" onChange={(event)=> {return fname = event.target.value}}/>
        <button className="submitButton" type="submit" onClick={()=>getRequests(fname)}>Submit</button>
        <br/>
        <input className="inputField" type="date" placeholder="Please enter a date" onChange={(event)=> {return date = event.target.value}}/>
        <button className="submitButton" type="submit" onClick={()=>getRequestsDate(date)}>Submit</button>
        </div>
    )
}


export default HelpInput
