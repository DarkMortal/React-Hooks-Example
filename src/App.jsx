import { useRef } from "react";
import Example1 from "./components/example1";
import Example2 from "./components/example2";
import Example3 from "./components/example3";

export default function App() {
  var newRef = useRef();
  return (
    <div className="App">
      <Example1 />
      <hr />
      <div class="btn-grp">
        <button onClick={() => newRef.current.focusHello()}>Hello</button>
        <button onClick={() => newRef.current.focusBye()}>Good bye</button>
        <button onClick={() => newRef.current.focusWarning()}>Warning</button>
        <button onClick={() => newRef.current.resetFocus()}>Reset</button>
      </div>
      <Example2 ref={newRef} />
      <hr />
      <Example3 />
      <hr />
    </div>
  );
}
