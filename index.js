import express from "express";
import userRoutes from "./routes/users-router.js";
import cors from "cors";




const app = express();
app.use(express.json());    
app.use(cors());
app.use("/candidatos", userRoutes);
app.use("/enviar-email", userRoutes);

app.listen(3000);
