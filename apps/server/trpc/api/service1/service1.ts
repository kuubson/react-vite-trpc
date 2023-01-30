import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import type { Application } from "express";

import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

import { service1Router, service1UserProcedure } from "trpc";
import { Service2 } from "../service2/service2";

export type Service1 = typeof appRouter;

export type Service1Context = inferAsyncReturnType<typeof createContext>;

export const service2Client = createTRPCProxyClient<Service2>({
  links: [httpBatchLink({ url: "http://localhost:3001/service2" })],
});

const appRouter = service1Router({
  user: service1UserProcedure.query(async () => {
    const role = await service2Client.role.query();
    return { user: { name: "John" }, ...role };
  }),
});

const createContext = ({ req, res }: CreateExpressContextOptions) => ({
  req,
  res,
});

export const initService1 = async (app: Application) => {
  app.use(
    "/service1",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
};
