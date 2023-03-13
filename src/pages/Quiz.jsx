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
      if (input === "0" || input === 0) {
        alert("You have to pick an answer for question " + question[0].question);
        return;
      }
      let obj = {
        question: question[0].question,
        answer: question[0].answer,
        input: input,
        check: parseInt(input) === question[0].answerId,
      };
      newArr.push(obj);
    });
    setResult(newArr);
    setShowResult(true);
  }

  let displayQuestions = questions.map((el, index) => {
    return (
      <form className="single-question" key={index}>
        <label>{el.question}</label>
        <select>
          {el.options.map((option, index2) => {
            return (
              <option key={index2} value={index2}>
                {option}
              </option>
            );
          })}
        </select>
      </form>
    );
  });

  function getNumberOfCorrectAnswers() {
    let num = 0;
    result.forEach((el) => {
      if (el.check) num++;
    });
    return num;
  }

  return (
    <div className="Quiz">
      <h1>quiz</h1>
      <div>
        <div id="inputContainer">{displayQuestions && displayQuestions}</div>
        <button onClick={() => handleAnswer()}>Submit</button>
        {showResult && (
          <div>
            {result.map((el) => {
              return (
                <p style={{ color: el.check ? "green" : "red" }} key={el.question}>
                  {el.question}
                </p>
              );
            })}
            <p>
              Number of correct answers: {getNumberOfCorrectAnswers()} / {result.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
