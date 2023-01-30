import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import type { Application } from "express";

import { service2Router } from "trpc";
import { role } from "./resolvers";

export type Service2 = typeof service2;

export type Service2Context = inferAsyncReturnType<typeof createContext>;

const service2 = service2Router({
  role,
});

const createContext = ({ req, res }: CreateExpressContextOptions) => ({
  req,
  res,
});

export const initService2 = async (app: Application) => {
  app.use(
    "/service2",
    createExpressMiddleware({
      router: service2,
      createContext,
    })
  );
};
