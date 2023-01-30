import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import type { Application } from "express";

import { service1Router } from "trpc";
import { user } from "./resolvers";

export type Service1 = typeof service1;

export type Service1Context = inferAsyncReturnType<typeof createContext>;

const service1 = service1Router({
  user,
});

const createContext = ({ req, res }: CreateExpressContextOptions) => ({
  req,
  res,
});

export const initService1 = async (app: Application) => {
  app.use(
    "/service1",
    createExpressMiddleware({
      router: service1,
      createContext,
    })
  );
};
