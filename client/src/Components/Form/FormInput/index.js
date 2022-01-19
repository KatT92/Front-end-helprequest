
import React from "react";


function FormInput({addItem}) {

    let fname = ""
    let lname = ""
    let room = ""
    let problem = ""
    let tried = ""
    let file = ""

    return (
        <div>
        <form class="formInput">
        <input class="inputField" type="text" required minLength="2" placeholder="first name" onChange={(event)=> {return fname = event.target.value}}/>
        <input class="inputField" type="text" required minLength="2" placeholder="last name" onChange={(event)=> {return lname = event.target.value}}/>
        <input class="inputField" type="number" required minLength="1" placeholder="room number" onChange={(event)=> {return room = event.target.value}}/>
        <input class="inputField" type="text" required minLength="2" placeholder="What problem are you having" onChange={(event)=> {return problem = event.target.value}}/>
        <input class="inputField" type="text" required minLength="2" placeholder="What have you tried?" onChange={(event)=> {return tried = event.target.value}}/>
        {/* <input type="file" onChange={(event)=>{return file = event.target.files[0]}}/> */}
        </form>
        <button class="submitButton" type="submit" onClick={()=>addItem(fname, lname, room, problem, tried, file)}>Submit</button>
        </div>
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