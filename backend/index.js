import express from "express";
import cors from "cors";
import { verifyToken } from "./middleware/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

// Protected route
app.get("/secure-data", verifyToken, (req, res) => {
  // Simulate a protected route
  res.json({
    message: "This is secure data",
    user: req.user, // Decode user info from token
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
