import React from "react";

function FormDisplay({fname, lname, room, problem, tried}) {

return (
    <ul>
    <li>{fname}</li>
    <li>{lname}</li>
    <li>{room}</li>
    <li>{problem}</li>
    <li>{tried}</li>
    </ul>
)
}

export default FormDisplay