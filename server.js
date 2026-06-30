import "dotenv/config";
import connectDB from "./src/db/db.js";
import app from "./src/app.js";

connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server is running at port", process.env.PORT);
});
