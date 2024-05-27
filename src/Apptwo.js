import React, { useState, useEffect } from "react";
import Appone from "./Appone";


function Apptwo() {

  const [data, setData ] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => setData(data))
  
  }, [])

  console.log(data[0])
  return (
  <div>
   <Appone />
   <div>
   {data.map(item => (
    <div key={item.id}>
      <p>{item.title}</p>
      </div>
  ))}
   </div>
    </div>
  );
}


export default Apptwo;
