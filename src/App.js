import React, { useEffect, useState } from 'react';
import sayhello from './api/sayhello';
import Card from './components/Card.jsx';
function App(){
  const[data,setdata]=useState(null);
  useEffect(()=>{
    sayhello()
    .then((val)=>{
      setdata(val.results[0]);
      // console.log(val.results[0])
    })
  },[]);
  function changeval(){
    sayhello()
    .then((val)=>{
      setdata(val.results[0]);
    })
  }
  return(
    <div>
      {data? <Card title={data} />:<p>nodata</p>}
      <button onClick={changeval}>change</button>
    </div>
  )
}
export default App;