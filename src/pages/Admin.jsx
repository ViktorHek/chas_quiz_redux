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
    <div className="Admin">
      <h1>admin</h1>
      <button onClick={gotoQuiz}>Go to Quiz</button>
      <input onChange={(event) => handleChangeQuestion(event)} />
      <input onChange={(event) => handleChangeAnswer(event)} />
      <button onClick={() => handleAdd()}>add</button>
      {displayQuestions &&
        displayQuestions.map((el) => {
          return <p key={el.question}>{el.question}</p>;
        })}
    </div>
  );
}

export default Admin;
