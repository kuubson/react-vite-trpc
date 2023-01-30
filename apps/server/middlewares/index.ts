import cookieParser from "cookie-parser";
import type { Application } from "express";

import { initService1 } from "trpc/api/service1/service1";
import { initService2 } from "trpc/api/service2/service2";

export const middlewares = (app: Application) => {
  app.use(cookieParser());

  app.set("trust proxy", true);

  initService1(app);

  initService2(app);
};
