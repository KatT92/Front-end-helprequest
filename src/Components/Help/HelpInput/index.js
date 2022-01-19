
import React from "react";


function HelpInput({getRequests}) {

    let fname = ""

    return (
        <div>
        <form className="formInput">
        <input className="inputField" type="text" required minLength="2" placeholder="first name" onChange={(event)=> {return fname = event.target.value}}/>
   
        </form>
        <button className="submitButton" type="submit" onClick={()=>getRequests(fname)}>Submit</button>
        </div>
    )
}


export default HelpInput
