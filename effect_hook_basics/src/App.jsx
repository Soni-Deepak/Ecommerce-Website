import React, { useEffect, useState } from "react";

const App = () => {
  const [showCounter, setShowCounter] = useState(false);
  //MOUNTING => UPDATING => UNMOUNTING

  return (
    <div>
      <button
        onClick={() => {
          setShowCounter(!showCounter);
        }}
      >
        Show Counter
      </button>

      {showCounter && <Counter />}
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(0);

    useEffect(() => {
      console.log("Component Mounted")

      return () => {
        console.log("Component Unmounted")
    }
    }, [])

    useEffect(() => {
      console.log("Component Updated")
    }, [count])

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  );
}

export default App;

// useEffect is a React Hook that lets you run code in response to your component rendering or updating — basically, it's for "side effects" (things that reach outside of React, like fetching data, setting timers, or manually changing the DOM).
