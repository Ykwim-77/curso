// routes/candidatos-routes.js
import { Router } from "express";
import {
  ListarCandidatos,
  PegarCandidato,
  CriarCandidato,
  AtualizarCandidato,
  EnviarEmail
} from "../controller/user-controller.js";

const roteadorCandidatos = Router();

roteadorCandidatos.get("/", ListarCandidatos);
roteadorCandidatos.get("/:id", PegarCandidato);
roteadorCandidatos.post("/", CriarCandidato);
roteadorCandidatos.patch("/:id", AtualizarCandidato);
roteadorCandidatos.post("/", EnviarEmail);

export default roteadorCandidatos;
