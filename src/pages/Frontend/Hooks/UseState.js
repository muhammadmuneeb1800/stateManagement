import React, { useState } from "react";
// import { CountContext } from "../../../contexts/CountContext";

export default function UseState() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("");
  // const { count, setCount, firstName, setFirstName } = useContext(CountContext);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center mt-5">UseState</h1>
          </div>
        </div>
      </div>
      <h3 className="text-center mt-2">{firstName}</h3>
      <div className="container mt-3">
        <div className="row">
          <div className="col text-center">
            <input
              type="text"
              placeholder="Write Somthings"
              className="w-100 py-2 px-3"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col mt-5 text-center">
            <div className="d-flex flex-column">
              <button
                className="btn-primary my-3 w-50 offset-3 btn"
                onClick={() => setCount(count + 1)}
              >
                InCrement
              </button>
              <h1>{count}</h1>
              <button
                className="btn-danger my-3 w-50 offset-3 btn"
                onClick={() => setCount(count - 1)}
              >
                DeCrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
