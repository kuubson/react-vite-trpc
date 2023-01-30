import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import type { Application } from "express";

import { service2Router, service2UserProcedure } from "trpc";

export type Service2 = typeof service2;

export type Service2Context = inferAsyncReturnType<typeof createContext>;

const service2 = service2Router({
  role: service2UserProcedure.query(() => ({ role: "USER" })),
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
