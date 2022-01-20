import React from 'react';

function HelpDisplay({date, fname, lname, problem, tried}) {

 return (
     <ul>
     History of problems for {fname} {lname}:
         <li>date: {date}</li>
         <li>problem: {problem}</li>
         <li>tried: {tried}</li>
     </ul>
 )
}

export default HelpDisplay