import express from 'express';
import cors from "cors";

const app = express()

app.use(cors());

const port = process.env.PORT || 3000;

// use a different HTTP method
app.post("/jez", function (request, response) {
    console.log("Oi, oi, saveloy!")
    console.log(request.body)
    // const data = request.body;
    // console.log(JSON.parse(request.body))
    response.json("Oi oi!");

    // response.json("This is the POST endpoint for /jez");
  });

app.get("/", (request, response) => response.json("Welcome to my crib, bruh"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

