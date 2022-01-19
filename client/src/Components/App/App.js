import { nanoid } from 'nanoid'
import './App.css';
import React, {useState, useEffect} from 'react';
import FormDisplay from '../Form/FormDisplay/index.js';
import FormInput from '../Form/FormInput/index.js';


function App() {

  //const API_URL = 'localhost:3000/data'
  
  // process.env.REACT_APP_API_URL

  // function Show() {
    const [users, setUsers] = useState([]);
    const [error, setError] =  useState("")
  // }

  
    async function getUsers() {
      const response = await fetch('localhost:3000/data');
      const data = await response.json()
      console.log(data)
    }
    console.log(getUsers())
  

  const [arrayData, setArrayData] = useState([])

  function addItem(fname, lname, room, problem, tried, file) {
    if (fname.length>1 && 
      lname.length>1 && 
      room.length>0 && 
      problem.length>2 && 
      tried.length>2
      ) {
    setArrayData([...arrayData, {fname:fname, lname:lname, room:room, problem:problem, tried:tried, 
      // file:file[0].name
    }])
      }
      else { 
        setArrayData([...arrayData])}
  }

  function deleteItem(helper, index) {
    if (helper.length>1) {
    setArrayData([...arrayData.slice(0, index), ...arrayData.slice(index+1)])
    }
    else {
      setArrayData([...arrayData])
    }
  }

  // function setHelper(helper) {
  //   if (helper.length>1){
  //   setArrayData([...arrayData, {helper:helper}])
  //   }
  //   else {
  //   setArrayData([...arrayData])
  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">
      Request help:
      <FormInput addItem={addItem} />

      { arrayData.map((item, index)=> { return ( 
  <FormDisplay deleteItem={deleteItem} /*file={item.file}*/ index={index} key={nanoid} fname={item.fname} lname={item.lname} room={item.room} problem={item.problem} tried={item.tried}  ></FormDisplay>
  )})}

      </header>
    </div>
  );
}

export default App;

