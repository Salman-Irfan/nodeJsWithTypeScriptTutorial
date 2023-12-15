import express from 'express';
import userRoutes from './routes/userRoutes.js';
const app = express();
const port = 4000;
app.get("/", (req, res) => {
    res.send("Hello World! From type script");
});
// available routes
app.use('/user', userRoutes);
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
