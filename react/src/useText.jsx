import React, { useState, useEffect } from "react";

function TimerComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("컴포넌트가 마운트 됨 1");

    return () => {
      console.log("컴포넌트가 언마운트됨 2");
    };
  }, []);
  useEffect(() => {
    console.log(`count가 ${count}로 업데이트됨 3`);
  }, [count]);
  return (
    <>
      <h1>Timer : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1증가
      </button>
    </>
  );
}

export default TimerComponent;
