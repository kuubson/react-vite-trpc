import express from "express";
import http from "http";

import "dotenv/config";

import "./config/aliases";

import { Middlewares } from "middlewares";

const app = express();

const server = http.createServer(app);

Middlewares.config(app);

const port = process.env.PORT || 3001;

server.listen(port, () => console.log(`🚀 Server has launched`));
