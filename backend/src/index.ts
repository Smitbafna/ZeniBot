import express from "express";
import quoteRouter from "./routes/quote"; // Adjust path if needed
import balanceRouter from "./routes/balance"; // Adjust path if needed

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mount routers
app.use("/", quoteRouter); // quote routes at root or "/"
app.use("/balance", balanceRouter); // balance routes under /balance path

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
