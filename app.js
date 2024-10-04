const express = require("express");
const taskRoutes = require("./routes/tasks");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/tasks", taskRoutes);

app.listen(port, (err) => {
  if (err) {
    console.log("something happened bad", err);
  }
  console.log(`server is up and running on ${port}`);
});
