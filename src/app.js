import express from 'express';
import morgan from 'morgan';
import userRouter from './routes/user.route';

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use("/api/user", userRouter)

export default app;