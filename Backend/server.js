import { app } from "./app.js";
import { connectDB } from "./db/apidatabase.js";

connectDB();

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
