import { Router } from "express";
import { join } from "node:path";
const router = Router();

router.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../public/index.html"));
});

export default router;
