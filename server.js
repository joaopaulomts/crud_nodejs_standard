import express from "express";
import router from "./routes/userRoutes.js"; // Ajuste o caminho conforme necessário

const app = express();
const port = 3000;

app.use(express.json());
app.use("/users", router);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
