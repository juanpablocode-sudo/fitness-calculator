"use client";
import { useState } from "react";

export default function Home() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [edad, setEdad] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = () => {
    const h = Number(altura) / 100;
    const imc = Number(peso) / (h * h);

    let calorias =
      10 * Number(peso) + 6.25 * Number(altura) - 5 * Number(edad) + 5;

    setResultado(
      `IMC: ${imc.toFixed(2)} | Calorías: ${Math.round(calorias)}`
    );
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h1>IMC + Calorías PRO</h1>

      <input placeholder="Peso" onChange={(e) => setPeso(e.target.value)} /><br/><br/>
      <input placeholder="Altura" onChange={(e) => setAltura(e.target.value)} /><br/><br/>
      <input placeholder="Edad" onChange={(e) => setEdad(e.target.value)} /><br/><br/>

      <button onClick={calcular}>Calcular</button>

      <h2>{resultado}</h2>
    </div>
  );
}
