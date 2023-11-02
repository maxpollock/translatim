const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
const axios = require("axios");

app.get("/", (_, response) => response.json("Root route for translatim."));

app.get("/translate", async (request, response) => {
  // const word = request.query.word
  // const from = request.query.from
  // const to = request.query.to

  const { word, from, to } = request.query;

  const API = `https://api.mymemory.translated.net/get?q=${word}&langpair=${from}|${to}`;
  const res = await axios.get(API);

  response.json({
    translation: res.data.responseData.translatedText,
    match: res.data.responseData.match,
  });
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
