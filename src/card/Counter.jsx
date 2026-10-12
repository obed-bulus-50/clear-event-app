import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div clsssName="flex  justify-center item-center  ">
      <p>Count: {count}</p>
      <div className="flex gap-2 justify-center item-center">
        <button onClick={increment} className="bg-blue-300 border-1 rounded  hover:bg-blue-500">
          increment 
        </button>
        <button onClick={decrement} className="bg-red-300 border-1 rounded  hover:bg-red-500">
          decrement
        </button>
      </div>
      
    </div>
  );
}

export default Counter;





