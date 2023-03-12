import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Start from "./pages/Start";
import Result from "./pages/Result";
import Quiz from "./pages/Quiz";
import Admin from "./pages/Admin";

function App() {
  const elementArr = [
    <Start key={"start"} />,
    <Admin key={"admin"} />,
    <Quiz key={"quiz"} />,
    <Result key={"result"} />,
  ];
  const { view } = useSelector((state) => state);
  const [displayView, setDisplayView] = useState(elementArr.filter((el) => el.key === view));

  useEffect(() => {
    setDisplayView(elementArr.filter((el) => el.key === view));
  }, [view]);

  return (
    <div className="App">
      {displayView && displayView}
    </div>
  );
}

export default App;
