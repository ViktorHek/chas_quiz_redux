import { useState } from "react";
import { useSelector } from "react-redux";

function Admin() {
  const [inputVal, setInputVal] = useState("");
  const { questions } = useSelector((state) => state);

  function handleChange(event) {
    setInputVal(event.target.value);
  }

  function handleAdd() {
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
    <div className="Admin">
      <h1>admin</h1>
      <a href={`/quiz`}>Go to Quiz</a>
      <input onChange={() => handleChange(event)} />
      <button onClick={() => handleAdd()}>add</button>
      {displayQuestions && displayQuestions}
    </div>
  );
}

export default Admin;
