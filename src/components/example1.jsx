import { useState, useLayoutEffect, useMemo, useRef } from "react";

export default function Example1() {
  const [age, changeNum] = useState(1);
  const [themeDark, changeTheme] = useState(false);
  const rendered = useRef(1);

  const mode = {
    backgroundColor: themeDark ? "#000000" : "#ffffff",
    color: !themeDark ? "#000000" : "#ffffff"
  };
  const getStatement = (num) =>
    num >= 18 ? "You're an adult" : "You're not an adult";
  const message = useMemo(() => getStatement(age), [age]);

  // useMemo will only recompute the memoized value when one of the deps has changed.
  useLayoutEffect(() => {
    // unlike useState, useRef doesn't cause the component to re-render and it's value persists between states
    rendered.current++;
  });
  // will only run when message has changed, i.e, when age has crossed 18
  useLayoutEffect(() => alert(message), [message]);

  var decrement = () => changeNum((val) => val - 1);
  var increment = () => changeNum((val) => val + 1);
  var updateTheme = () => changeTheme((val) => !val);
  return (
    <>
      <h1>
        <u>Example-1 useMemo</u>
      </h1>
      <button onClick={decrement}>-</button>
      <span style={{ margin: "10px" }}>{age}</span>
      <button onClick={increment}>+</button> <br />
      <button onClick={updateTheme}>Change Theme</button>
      <div style={mode}>
        <h1>
          <u>{message}</u>
        </h1>
        <h1>This component rendered {rendered.current} times</h1>
      </div>
    </>
  );
}
