import React from "react";

function FormDisplay({fname, lname, room, problem, tried, deleteItem, index, /*file*/}) {
let helper = "";
// console.log("f", file)

return (
    <ul>
    <li>Priority: {index+1}</li>
    <li>{fname}</li>
    <li>{lname}</li>
    <li>{room}</li>
    <li>{problem}</li>
    <li>{tried}</li>
    {/* <img src={file} alt="display"></img> */}
    <li>
    <input type="text" placeholder="helper" required onChange={(event)=>{return helper=event.target.value}}></input>
    <label>Completed:</label><input type="checkbox" onClick={()=>deleteItem(helper, index)}>
    </input></li>
    </ul>
)
}

export default FormDisplay