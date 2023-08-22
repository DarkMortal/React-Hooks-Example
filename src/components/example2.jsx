import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

function Example2({ ...props }, passedRef) {
  var helloMessageRef = useRef();
  var goodbyeMessageRef = useRef();
  var warningMessageRef = useRef();
  var rendered = useRef(1);

  useEffect(() => {
    rendered.current++;
  });

  const resetFocus = () => {
    helloMessageRef.current.style.backgroundColor = goodbyeMessageRef.current.style.backgroundColor = warningMessageRef.current.style.backgroundColor =
      "transparent";
    helloMessageRef.current.style.color = goodbyeMessageRef.current.style.color = warningMessageRef.current.style.color =
      "black";
  };

  // override the default ref passed as prop :)
  useImperativeHandle(passedRef, () => {
    return {
      resetFocus: resetFocus,
      focusHello: () => {
        resetFocus();
        helloMessageRef.current.style.backgroundColor = "red";
        helloMessageRef.current.style.color = "white";
      },
      focusBye: () => {
        resetFocus();
        goodbyeMessageRef.current.style.backgroundColor = "blue";
        goodbyeMessageRef.current.style.color = "white";
      },
      focusWarning: () => {
        resetFocus();
        warningMessageRef.current.style.backgroundColor = "orange";
        warningMessageRef.current.style.color = "white";
      }
    };
  });

  return (
    <>
      <h1>
        <u>Example-2 useImperativeHandle</u>
      </h1>
      <div className="container">
        <h1 ref={helloMessageRef}>
          <u>Hello Message</u>
        </h1>
        <h1 ref={goodbyeMessageRef}>
          <u>Goodbye Message</u>
        </h1>
        <h1 ref={warningMessageRef}>
          <u>Warning Message</u>
        </h1>
      </div>
      <h1>This component rendered {rendered.current} times </h1>
    </>
  );
}

export default forwardRef(Example2);
