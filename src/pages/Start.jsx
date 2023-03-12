import { useState } from "react";

function Start() {
  const [val, setVal] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);
  const password = "pass";
  function handleInput(event) {
    event.preventDefault();
    setVal(event.target.value);
  }

  function handleLogin() {
    let url = window.location.href;
    if (val === password) {
      window.location.href = url + "admin";
    } else {
      setWrongPassword(true);
    }
  }

  function handleQuiz() {
    let url = window.location.href;
    window.location.href = url + "quiz";
  }

  return (
    <div className="Start">
      <h1>start</h1>
      <input onChange={() => handleInput(event)} />
      <button onClick={() => handleLogin()}>Login</button>
      {wrongPassword && <p style={{ color: "red" }}>Wrong Password</p>}
      <button onClick={handleQuiz}>Quiz</button>
    </div>
  );
}

export default Start;
