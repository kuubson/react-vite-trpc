import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import type { Application } from "express";
import swaggerUi from "swagger-ui-express";
import {
  createOpenApiExpressMiddleware,
  generateOpenApiDocument,
} from "trpc-openapi";
import { service2Router } from "trpc/trpc";

import { role } from "./resolvers";

export type Service2 = typeof service2;

export type Service2Context = inferAsyncReturnType<typeof createContext>;

const service2 = service2Router({
  role,
});

const service2OpenApi = generateOpenApiDocument(service2, {
  title: "tRPC OpenAPI - service 2",
  version: "1.0.0",
  baseUrl: "http://localhost:3001",
});

const createContext = ({ req, res }: CreateExpressContextOptions) => ({
  req,
  res,
});

export const initService2 = async (app: Application) => {
  app.use(
    "/docs/service2",
    swaggerUi.serveFiles(service2OpenApi),
    swaggerUi.setup(service2OpenApi)
  );

  app.use(
    "/service2",
    createOpenApiExpressMiddleware({ router: service2, createContext })
  );

  app.use(
    "/trpc/service2",
    createExpressMiddleware({
      router: service2,
      createContext,
    })
  );
};
