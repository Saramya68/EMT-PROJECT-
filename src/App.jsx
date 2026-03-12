import { useState } from "react";
import { gradient } from "./math/gradient";
import { divergence } from "./math/divergence";
import { curl } from "./math/curl";
import "./index.css";

function App() {

  const [system,setSystem] = useState("cartesian");

  const [scalar,setScalar] = useState("");

  const [fx,setFx] = useState("");
  const [fy,setFy] = useState("");
  const [fz,setFz] = useState("");

  const [gradResult,setGrad] = useState("");
  const [divResult,setDiv] = useState("");
  const [curlResult,setCurl] = useState("");

  const calculateGradient = () => {

    const result = gradient(scalar,system);
    setGrad(result);

  };

  const calculateVector = () => {

    const div = divergence(fx,fy,fz,system);
    const crl = curl(fx,fy,fz,system);

    setDiv(div);
    setCurl(crl);

  };

  return (

    <div className="container">

      <h1 className="title">
        Electromagnetic Vector Calculator
      </h1>


      {/* Coordinate System */}

      <div className="section">

        <h2>Select Coordinate System</h2>

        <select
         value={system}
         onChange={(e)=>setSystem(e.target.value)}
        >

          <option value="cartesian">
            Cartesian (x , y , z)
          </option>

          <option value="cylindrical">
            Cylindrical (r , θ , z)
          </option>

          <option value="spherical">
            Spherical (r , θ , φ)
          </option>

        </select>

      </div>


      {/* Gradient Section */}

      <div className="section">

        <h2>Scalar Field (For Gradient)</h2>

        <p>Enter scalar function:</p>

        <input
         placeholder="f(x,y,z)"
         value={scalar}
         onChange={(e)=>setScalar(e.target.value)}
        />

        <button onClick={calculateGradient}>
          Calculate Gradient
        </button>

        {gradResult && (

          <div className="result">
            Gradient = {gradResult}
          </div>

        )}

      </div>


      {/* Vector Field Section */}

      <div className="section">

        <h2>Enter Vector Field</h2>

        <p>F = (Fx , Fy , Fz)</p>

        <input
         placeholder="Fx"
         value={fx}
         onChange={(e)=>setFx(e.target.value)}
        />

        <input
         placeholder="Fy"
         value={fy}
         onChange={(e)=>setFy(e.target.value)}
        />

        <input
         placeholder="Fz"
         value={fz}
         onChange={(e)=>setFz(e.target.value)}
        />

        <button onClick={calculateVector}>
          Calculate Divergence & Curl
        </button>

      </div>


      {/* Results */}

      <div className="section">

        <h2>Results</h2>

        {divResult && (

          <div className="result">
            Divergence = {divResult}
          </div>

        )}

        {curlResult && (

          <div className="result">
            Curl = {curlResult}
          </div>

        )}

      </div>

    </div>

  );

}

export default App;