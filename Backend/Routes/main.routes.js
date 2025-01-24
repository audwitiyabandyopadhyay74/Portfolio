import express from 'express';
import { registerProject } from '../Services/add.service.js';

const router = express.Router();

router.post('/projects', async (req, res) => {
  const { title, description, image, link, technologies } = req.body;
  try {
    const project = await registerProject(title, description, image, link, technologies);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;