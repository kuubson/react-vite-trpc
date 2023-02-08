import { initTRPC } from "@trpc/server";

import type { Service1Context } from "./api/service1/service1";
import { Service2, Service2Context } from "./api/service2/service2";

import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

import { OpenApiMeta } from "trpc-openapi";

export const service2Client = createTRPCProxyClient<Service2>({
  links: [httpBatchLink({ url: "http://localhost:3001/trpc/service2" })],
});

const service1 = initTRPC
  .context<Service1Context>()
  .meta<OpenApiMeta>()
  .create();

const service2 = initTRPC
  .context<Service2Context>()
  .meta<OpenApiMeta>()
  .create();

const { middleware: service1Middleware, router: service1Router } = service1;

const { middleware: service2Middleware, router: service2Router } = service2;

const service1UserProcedure = service1.procedure;

const service2UserProcedure = service2.procedure;

export {
  service1Middleware,
  service1Router,
  service1UserProcedure,
  service2Middleware,
  service2Router,
  service2UserProcedure,
};
