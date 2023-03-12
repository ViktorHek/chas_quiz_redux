import { useState } from "react";
import { useSelector } from "react-redux";

function Quiz() {
  const { questions } = useSelector((state) => state);
  function handleChange(event) {
    setInputVal(event.target.value);
  }
  
  function handleAnswer() {
    let newArr = questions;
    let obj = {
      question: inputVal,
      answer: "",
    };
    newArr.push(obj);
    setInputVal("")
  }
  
  let displayQuestions = questions.map((el) => {
    return <p key={el.question}>{el.question}</p>;
  });
  
  return (
    <div className="Quiz">
      <h1>quiz</h1>
      <a href={`/quiz`}>Go to Quiz</a>
      <input onChange={() => handleChange(event)} />
      <button onClick={() => handleAnswer()}>add</button>
      {displayQuestions && displayQuestions}
    </div>
  );
}

export default Quiz;