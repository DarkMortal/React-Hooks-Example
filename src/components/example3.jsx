import { useRef, useState, useLayoutEffect, useTransition } from "react";

export default function Example3() {
  var renderer = useRef(1);
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  // functions wrapped inside startTransition are low-priority, i.e, those functions are run only when the high-priority tasks (like dom-manipulation) are completed
  const SIZE = 2000;

  useLayoutEffect(() => {
    renderer.current++;
  });

  return (
    <>
      <h1>
        <u>Example-3 useTransition</u>
      </h1>
      <input
        type="text"
        onInput={(evt) => {
          startTransition(() => {
            let arr = [];
            if (evt.target.value.strip() !== "")
              for (let i = 0; i < SIZE; i++)
                arr.push(`${evt.target.value} : ${i + 1}`);
            setList(arr);
          });
        }}
      />{" "}
      <br />
      {isPending ? (
        <>
          <br />
          <strong>Loading...</strong>
          <br />
        </>
      ) : (
        <ol>
          {Array.from(list, (elm) => (
            <li>
              <strong>{elm}</strong>
            </li>
          ))}
        </ol>
      )}
      <h1>This component rendered {renderer.current} times</h1>
    </>
  );
}
