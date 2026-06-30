import express, { type Request, type Response } from "express";

const app = express();

app.get("/topic", (_req: Request, res: Response) => {
  res.json({ message: "Hello from Express backend!" });
});

// Create topic for the forum
app.post("/topic", (req: Request, res: Response) => {
  const { title, content } = req.body as { title?: string; content?: string };
  // Here you would typically save the topic to a database
  res.status(201).json({ message: "Topic created successfully", title, content });
});

// Edit topic for the forum
app.put("/topic/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body as { title?: string; content?: string };
  // Here you would typically update the topic in a database
  res.json({ message: `Topic with ID ${id} updated successfully`, title, content });
});

// Delete topic for the forum
app.delete("/topic/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  // Here you would typically delete the topic from a database
  res.json({ message: `Topic with ID ${id} deleted successfully` });
});

export default app;