import { useState } from "react";
import "../Styles/Radianes.css";

const toRadian = (grades) => {
  return grades * 0.01745;
};
const toDegrees = (radians) => {
  return radians * 57.296;
};

const Radianes = (props) => {
  const [valueRad, setValueRad] = useState("");
  let [valueGra, setValueGra] = useState("");
  const [title, setTitle] = useState("");
  return (
    <div>
      <h1>Convirtiendo a {title}</h1>
      <h3>RADIANES</h3>
      <input
        className="radianes"
        type="text"
        value={toRadian(valueGra) || valueRad}
        onClick={(e) => {
          e.target.value = 0;
          setValueGra(0);
        }}
        onChange={(e) => {
          setValueRad(Number(e.target.value));
          setTitle("Radianes");
        }}
      />
      <h3>GRADOS</h3>
      <input
        className="grados"
        type="text"
        value={toDegrees(valueRad) || valueGra}
        onClick={(e) => {
          e.target.value = 0;
          setValueRad(0);
        }}
        onChange={(e) => {
          setValueGra(Number(e.target.value));
          setTitle("Grados");
        }}
      />
      {console.log(valueGra)}
    </div>
  );
};

export default Radianes;
