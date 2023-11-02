import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [from, setFrom] = useState("ar");
  const [to, setTo] = useState("ar");
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [img, setImg] = useState("");

  async function handleTranslate(event) {
    event.preventDefault();
    const API = `https://translatim-backend.onrender.com/translate?word=${word}&from=${from}&to=${to}`;
    const res = await axios.get(API);

    setTranslation(res.data.translation);
    setImg(res.data.image);
  }

  return (
    <>
      <div className="titles">
        <h1>my translatim</h1>
        <h2>where gifs and language come together</h2>
      </div>
      <form onSubmit={handleTranslate}>
        <div className="container">
          <select onChange={(event) => setFrom(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
          <input
            placeholder="Translate"
            onChange={(event) => setWord(event.target.value)}
          />
        </div>
        <div className="container">
          <select onChange={(event) => setTo(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
          <input value={translation} readOnly placeholder="Translation" />
        </div>
        <button>Translate</button>
      </form>
      <img src={img} />
    </>
  );
}

export default App;
