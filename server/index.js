import express from 'express';

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});