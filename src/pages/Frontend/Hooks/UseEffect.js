import React, { useEffect } from "react";

export default function UseEffect() {
  useEffect(() => {
    let response = "Muhammad Muneeb";
    console.log(response);
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center mt-5">Use Effect</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Last</th>
                  <th>Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
