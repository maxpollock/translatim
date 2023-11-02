import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("es");
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
        <h1>my transla<span id="tim">tim</span></h1>
        <h2>where language and gifs come together</h2>
      </div>
      <form onSubmit={handleTranslate}>
        <div className="container">
          <select onChange={(event) => setFrom(event.target.value)}>
            <option value="en">English</option>
            <option value="ar">Arabic</option>

            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
          <input
            placeholder="Enter words here..."
            onChange={(event) => setWord(event.target.value)}
          />
        </div>
        <div className="container">
          <select onChange={(event) => setTo(event.target.value)}>
            <option value="es">Spanish</option>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>

            <option value="tr">Turkish</option>
          </select>
          <input
            value={translation}
            readOnly
            placeholder="Translation will appear here"
          />
        </div>
        <button>Translate & Generate Gif</button>

        {img && (
          <div id="gif-title">
            <h2>Your Gif:</h2>
            <img src={img} />
          </div>
        )}
      </form>
    </>
  );
}

export default App;
