import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/ping")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching message:", error));
  }, []);
  return (
    <>
      <h1>{message}</h1>
    </>
  );
}

export default App;
