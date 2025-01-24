import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import mainRoutes from './Routes/main.routes.js'; // Adjust the path as necessary

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB:', err);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/semi', mainRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});