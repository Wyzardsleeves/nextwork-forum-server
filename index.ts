import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";

// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.SERVER_PORT;

const app = express();

app.use(cors());
app.use(express.json());

// Use user routes
app.use(userRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
