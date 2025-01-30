import "./styles.css"; // Import the external CSS file for styling
import React, { useState } from "react"; // Import React and the useState hook

// Main App component
export default function App() {
  // Declare a state variable 'count' with an initial value of 0
  // 'setCount' is the function used to update 'count'
  const [count, setCount] = useState(0);

  // Function to handle incrementing the count
  const handleIncrement = () => {
    setCount(count + 1); // Increase the count by 1
  };

  // Function to handle decrementing the count
  const handleDecrement = () => {
    setCount(count - 1); // Decrease the count by 1
  };

  // Return the JSX to render the counter component
  return (
    <div className="container">
      <div className="counter">
        {/* Counter block that contains buttons and count display */}
        <button className="increment" onClick={handleIncrement}>
          +
        </button>
        <h3 className="number">{count}</h3>
        <button className="decrement" onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
}
