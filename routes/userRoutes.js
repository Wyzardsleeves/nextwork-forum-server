import express from "express";

const app = express();

app.get("/test_user", (req, res) => {
  res.json({ message: "Hello from users!" });
});

// Check if user is logged in
app.get("/api/user", (req, res) => {
  const { idToken } = req.headers;

  if (!idToken) {
    return res.status(401).json({ message: "Unauthorized: No ID token provided" });
  }

  // Here you would typically verify the ID token with Firebase Admin SDK
  // For this example, we'll just return a success message
  res.json({ message: "User is logged in", idToken });
});

// Register a new user
app.post("/api/user/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Bad Request: Email and password are required" });
  }

  // Here you would typically register the user with Firebase Authentication
  // For this example, we'll just return a success message
  res.status(201).json({ message: "User registered successfully", email });
});

// Login a user
app.post("/api/user/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Bad Request: Email and password are required" });
  }

  // Here you would typically log in the user with Firebase Authentication
  // For this example, we'll just return a success message
  res.json({ message: "User logged in successfully", email });
});

// Logout a user
app.post("/api/user/logout", (req, res) => {
  const { idToken } = req.headers;

  if (!idToken) {
    return res.status(401).json({ message: "Unauthorized: No ID token provided" });
  }

  // Here you would typically log out the user with Firebase Authentication
  // For this example, we'll just return a success message
  res.json({ message: "User logged out successfully", idToken });
});

export default app;
