import cookieParser from "cookie-parser";
import type { Application } from "express";

import { initializeTrpc } from "trpc/api/router";

export const middlewares = (app: Application) => {
  app.use(cookieParser());

  app.set("trust proxy", true);

  initializeTrpc(app);
};
