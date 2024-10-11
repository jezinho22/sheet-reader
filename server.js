import express from 'express';
import cors from "cors";

const app = express()

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// use a different HTTP method
app.post("/jez", function (request, response) {
    console.log("Oi, oi, saveloy!")
    console.log(request.body)
    const data = request.body;
    console.log(data)
    response.json(request.body);

  });

app.get("/", (request, response) => response.json("Welcome to my crib, bruh"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

