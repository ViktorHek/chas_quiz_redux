import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Admin() {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const [option, setOption] = useState("");
  const [options, setOptions] = useState(["Choose"]);
  const [answerId, setAnswerId] = useState(0);
  const { questions } = useSelector((state) => state);
  const [displayQuestions, setDisplayQuestions] = useState(questions);

  function handleChangeQuestion(event) {
    setQuestion(event.target.value);
  }
  function handleChangeOption(event) {
    setOption(event.target.value);
  }

  function handleAdd() {
    if (!question || !options.length || !answerId) {
      alert("You have to type a question, options and check witch answer is correct");
      return;
    }
    let newArr = questions;
    let obj = {
      question: question,
      options: options,
      answerId: answerId,
    };
    newArr.push(obj);
    setDisplayQuestions(newArr);
    dispatch({ type: "ADD_QUESTION", payload: newArr });
    setQuestion("");
  }

  function gotoQuiz() {
    dispatch({ type: "SET_VIEW", payload: "quiz" });
  }

  function addOption() {
    let newArr = options;
    newArr.push(option);
    setOptions(newArr);
    setOption("");
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
            <input onChange={(event) => handleChangeOption(event)} />
            <button onClick={() => addOption()}>Add Option</button>
          </span>
          {options &&
            options.map((el, index) => {
              if (index !== 0) {
                return (
                  <span key={index}>
                    <p>Option {index}:</p>
                    <p>{el}</p>
                    <span onClick={() => setAnswerId(index)} className="checkbox">
                      <span className={`${answerId === index && "checked"}`}></span>
                      <span className={`${answerId === index && "checked"}`}></span>
                    </span>
                  </span>
                );
              }
            })}
          <button onClick={() => handleAdd()}>add</button>
        </div>
        <div className="center" style={{ flexDirection: "column" }}>
          {displayQuestions.map((el) => {
            return (
              <div key={el.question} className="admin-display-question">
                <p>Question: {el.question}</p>
                {el.options.map((element, index) => {
                  if (index) {
                    return (
                      <p key={index} style={{ color: index === el.answerId ? "green" : "red" }}>
                        Answer {index}: {element}
                      </p>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Admin;
