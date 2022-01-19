import { nanoid } from 'nanoid'
import './App.css';
import React, {useState} from 'react';
import FormDisplay from '../Form/FormDisplay/index.js';
import FormInput from '../Form/FormInput/index.js';

function App() {

  // const API_URL = '/data'
  // const url = new URL(`http://localhost:5000`)

  async function getUsers() {
    let response = await fetch(`http://localhost:5000/helpData`);
    let data = await response.json()
    let datapl = data.payload
    return datapl
    }

async function getRequests(fname) {
  let newData = await getUsers()
  let newArray = newData.filter((item)=>{return item.fname === fname})
  console.log(newArray)
  return newArray
}

getRequests("c")

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


  // post request front-end

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
{ }
{/* <HelpInput getRequests={getRequests} />
{ arrayData.map((item, index)=> { return ( 
<HelpDisplay key={index} index={index} getRequests={getRequests} fname={item.fname} lname={item.lname} problem={item.problem} tred={item.tried}/>
)})} */}

      </header>
    </div>
  );
}

export default App;

