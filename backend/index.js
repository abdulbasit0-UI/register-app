import express from "express";
import cors from "cors";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
