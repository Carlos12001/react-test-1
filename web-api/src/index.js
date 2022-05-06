import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());

//Envia el mensaje espera un resquest y luego envia la respuesta
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Inicia la escucha en el puerto
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
