import React, { useState } from "react";

function MapPraticeNodata() {
  const [fruits] = useState([
    { id: 1, name: "사과" },
    { id: 2, name: "바나나" },
    { id: 3, name: "딸기" },
  ]);
  
  if (fruits.length === 0 ) return <p>데이터 없음</p>; 
  return (
    <>
    <ul>
     {
      fruits.map( (fruit) => { 
        return(
          <li key={fruit.id}>{fruit.name}</li>
        )
      })
    }
    </ul>
    </>
  );  
}
export default MapPraticeNodata ;