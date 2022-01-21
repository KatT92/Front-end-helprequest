import React from 'react';

function HelpDisplay({date, fname, lname, problem, tried}) {

 return (
     <ul className="analysis">
    <li>Name: {fname} {lname}</li> 
         <li>date: {date}</li>
         <li>problem: {problem}</li>
         <li>tried: {tried}</li>
         <hr/>
     </ul>
 )
}

export default HelpDisplay