import app from "./app";

app.listen(process.env.PORT, () => {
  console.log(
    `⚙ Backend started on http://${process.env.HOST}:${process.env.PORT}`
  );
});
