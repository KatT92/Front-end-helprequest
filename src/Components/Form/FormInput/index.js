import React, {useState} from "react";

function FormInput({addItem, 
    fname, changeFname,
    lname, changeLname,
    room, changeRname,
    problem, changePname,
    tried, changeTname
}) {

    //const [fname, setFname] = useState("")
 


    return (
        <div>
        <form className="formInput">
        <input className="inputField" type="text" required minLength="2" placeholder="first name" value={fname} onChange={(event)=> {changeFname(event.target.value)} }/>
        <input className="inputField" type="text" required minLength="2" placeholder="last name" value={lname} onChange={(event)=> {changeLname(event.target.value)}}/>
        <input className="inputField" type="number" required minLength="1" placeholder="room number" value={room} onChange={(event)=> {changeRname(event.target.value)}}/>
        <input className="inputField" type="text" required minLength="2" placeholder="What problem are you having" value={problem} onChange={(event)=> {changePname(event.target.value)}}/>
        <input className="inputField" type="text" required minLength="2" placeholder="What have you tried?" value={tried} onChange={(event)=> {changeTname(event.target.value)}}/>
        {/* <input type="file" onChange={(event)=>{return file = event.target.files[0]}}/> */}
        </form>
        <button className="submitButton" type="submit" onClick={()=>{addItem(fname, lname, room, problem, tried)}}>Submit</button>
        </div>
    )
}

export default FormInput
