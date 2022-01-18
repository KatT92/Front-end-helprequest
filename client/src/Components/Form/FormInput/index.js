
import React from "react";

function FormInput({addItem}) {

    let fname = "";
    let lname = "";
    let room = 0;
    let problem = "";
    let tried = "";

    return (
        <form>
        <input type="text" placeholder="first name" onChange={(event)=> {return fname = event.target.value}} ></input>
        <input type="text" placeholder="last name" onChange={(event)=> {return lname = event.target.value}} ></input>
        <input type="text" placeholder="room number" onChange={(event)=> {return room = event.target.value}}></input>
        <input type="text" placeholder="What problem are you having" onChange={(event)=> {return problem = event.target.value}}></input>
        <input type="text" placeholder="What have you tried?" onChange={(event)=> {return tried = event.target.value}}></input>
        <button onClick={()=>{addItem(fname, lname, room, problem, tried)}}>Submit</button>
        </form>

    )
}

export default FormInput


//     let name = ""
//     let age = ""
//     return (
//         <article>
//         <input type="text" placeholder="name" onChange={(event)=>{return name = event.target.value}}></input>
//         <input type="text" placeholder="age" onChange={(event)=>{return age = event.target.value}}></input>
//         <button type="submit" onClick={()=>addItem(name, age)}>Submit</button>
//         </article>
//     )
// }

// export default InputData