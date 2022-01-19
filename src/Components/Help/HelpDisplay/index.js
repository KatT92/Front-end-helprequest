import React from 'react';

function HelpDisplay({fname, lname, problem, tried}) {

 return (
     <ul>
         <li>fname: {fname}</li>
         <li>lname: {lname}</li>
         <li>problem: {problem}</li>
         <li>tried: {tried}</li>
     </ul>
 )
}

export default HelpDisplay