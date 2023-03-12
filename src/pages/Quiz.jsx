import { useState } from "react";
import { useSelector } from "react-redux";

function Quiz() {
  const { questions } = useSelector((state) => state);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState([]);

  function handleAnswer() {
    let arr = [].slice.call(document.getElementsByClassName("single-question"));
    let newArr = [];
    arr.forEach((el) => {
      let text = el.children.item(0).innerHTML;
      let question = questions.filter((el) => el.question === text);
      let input = el.children.item(1).value;
      let obj = {
        question: question.question,
        answer: question.answer,
        input: input,
        check: input === question[0].answer,
      };
      newArr.push(obj);
    });
    setResult(newArr);
    setShowResult(true);
  }

  let displayQuestions = questions.map((el, index) => {
    return (
      <div className="single-question" key={index}>
        <p>{el.question}</p>
        <input />
      </div>
    );
  });

  return (
    <div className="Quiz">
      <h1>quiz</h1>
      <div id="inputContainer">{displayQuestions && displayQuestions}</div>
      <button onClick={() => handleAnswer()}>Submit</button>
      {showResult && (
        <div>
          {result.map((el) => {
            return el.question;
          })}
        </div>
      )}
    </div>
  );
}

export default Quiz;
