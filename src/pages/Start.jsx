import { useState } from "react";
import { useDispatch } from "react-redux";

function Start() {
  const dispatch = useDispatch();
  const [val, setVal] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);
  const password = "pass";
  function handleInput(event) {
    event.preventDefault();
    setVal(event.target.value);
  }

  function handleLogin() {
    if (val === password) {
      dispatch({ type: "SET_VIEW", payload: "admin" });
    } else {
      setWrongPassword(true);
    }
  }

  function handleQuiz() {
    dispatch({ type: "SET_VIEW", payload: "quiz" });
  }

  return (
    <div className="start">
      <h1 style={{marginTop: '20px'}}>Login or start Quiz</h1>
      <div className="start-options-container">
        <div className="login-container center">
          <h3>Log in Here</h3>
          <div>
            <input onChange={(event) => handleInput(event)} />
            <button onClick={() => handleLogin()}>Login</button>
          </div>
          {wrongPassword && <p style={{ color: "red" }}>Wrong Password</p>}
        </div>
        <div className="center" style={{flexDirection: 'column'}}>
          <h3>Start the Quiz</h3>
          <button onClick={handleQuiz} style={{margin: '10px'}}>Quiz</button>
        </div>
      </div>
    </div>
  );
}

export default Start;
