import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import type { Application } from "express";
import { service1Router } from "trpc";

import swaggerUi from "swagger-ui-express";
import {
  createOpenApiExpressMiddleware,
  generateOpenApiDocument,
} from "trpc-openapi";
import { user } from "./resolvers";

export type Service1 = typeof service1;

export type Service1Context = inferAsyncReturnType<typeof createContext>;

const service1 = service1Router({
  user,
});

const service1OpenApi = generateOpenApiDocument(service1, {
  title: "tRPC OpenAPI - service 1",
  version: "1.0.0",
  baseUrl: "http://localhost:3001",
});

const createContext = ({ req, res }: CreateExpressContextOptions) => ({
  req,
  res,
});

export const initService1 = async (app: Application) => {
  app.use(
    "/docs/service1",
    swaggerUi.serveFiles(service1OpenApi),
    swaggerUi.setup(service1OpenApi)
  );

  app.use(
    "/service1",
    createOpenApiExpressMiddleware({ router: service1, createContext })
  );

  app.use(
    "/trpc/service1",
    createExpressMiddleware({
      router: service1,
      createContext,
    })
  );
};
