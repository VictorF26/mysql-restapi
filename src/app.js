import express from 'express';
import cors from 'cors'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
const app = express();

app.use(cors());
app.use(express.json());

app.use(indexRoutes)
app.use(employeesRoutes)

// not found (404)
app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
    next();
})

export default app;