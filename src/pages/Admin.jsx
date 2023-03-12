import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Admin() {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { questions } = useSelector((state) => state);
  const [displayQuestions, setDisplayQuestions] = useState(questions);

  function handleChangeQuestion(event) {
    setQuestion(event.target.value);
  }
  function handleChangeAnswer(event) {
    setAnswer(event.target.value);
  }

  function handleAdd() {
    let newArr = questions;
    let obj = {
      question: question,
      answer: answer,
    };
    newArr.push(obj);
    setDisplayQuestions(newArr);
    dispatch({ type: "ADD_QUESTION", payload: newArr });
    setQuestion("");
    setAnswer("");
  }

  function gotoQuiz() {
    dispatch({ type: "SET_VIEW", payload: "quiz" });
  }

  return (
    <div className="admin">
      <h1>admin</h1>
      <div className="admin-content-container">
        <div>
          <button onClick={gotoQuiz}>Go to Quiz</button>
        </div>
        <div className="admin-input-container">
          <span>
            <p>Question:</p>
            <input onChange={(event) => handleChangeQuestion(event)} />
          </span>
          <span>
            <p>Answer:</p>
            <input onChange={(event) => handleChangeAnswer(event)} />
          </span>
          <button onClick={() => handleAdd()}>add</button>
        </div>
        <div className="center" style={{flexDirection: 'column'}}>
          {displayQuestions &&
            displayQuestions.map((el) => {
              return (
                <div key={el.question} className="admin-display-question">
                  <p>Question: {el.question}</p>
                  <p>Answer: {el.answer}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Admin;
