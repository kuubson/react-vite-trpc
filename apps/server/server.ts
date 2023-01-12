import express from "express";
import http from "http";

import "dotenv/config";

import "./config/aliases";

import { middlewares } from "middlewares";

const app = express();

const server = http.createServer(app);

middlewares(app);

const port = process.env.PORT || 3001;

server.listen(port, () => console.log(`🚀 Server has launched`));
