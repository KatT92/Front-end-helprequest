import React from 'react';

function HelpDisplay({fname, lname, problem, tried}) {

 return (
     <ul>
     History of problems for {fname} {lname}:
         <li>problem: {problem}</li>
         <li>tried: {tried}</li>
     </ul>
 )
}

export default HelpDisplay