import cookieParser from "cookie-parser";
import type { Application } from "express";
import { RequestHandler } from "express-serve-static-core";

import { initializeTrpc } from "trpc/api/router";

export const middlewares = (app: Application) => {
  app.use(cookieParser() as RequestHandler);

  app.set("trust proxy", true);

  initializeTrpc(app);
};
