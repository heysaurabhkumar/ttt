import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [roll, getR] = useState("");
  const [result, setRes] = useState([]);

  return (
    <div>
      <Header />
      <div className="card darken-1" style={{ padding: "20px", margin: "30px auto 30px", width: "50%" }}>
        <div className="input-field col s6">
          <input
            style={{ borderColor: "black" }}
            id="rollInput"
            onChange={(e) => {
              getR(e.target.value);
            }}
            type="text"
          />
          <label style={{ color: "black" }} className="active" for="rollInput">Enter Rollnumbers</label>
          <center>
            <button
              className="btn waves-effect waves-light"
              style={{ backgroundColor: "black" }}
              onClick={async () => {
                fetch("/getroll", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ roll }),
                }).then(async (response) => {
                  let data = await response.json();
                  setRes(data);
                });
              }}
            >
              SUBMIT
      </button>
          </center>
        </div>
      </div>
      <div className="card darken-1" style={{ padding: "20px", margin: "30px auto 30px", width: "70%" }}>
        <table>
          <tr>
            <th>Roll Number</th>
            <th>Result</th>
          </tr>
          {Object.keys(result).length !== 0
            ? Object.keys(result).map((e) => {
              return (
                <tr>
                  <td>{e}</td>
                  <td>{result[e]}</td>
                </tr>
              );
            })
            : null}
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default App;
