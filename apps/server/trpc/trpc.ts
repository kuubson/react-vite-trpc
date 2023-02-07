import { initTRPC } from "@trpc/server";

const isWeb = typeof document !== "undefined";

import type { Service1Context } from "./api/service1/service1";
import { Service2, Service2Context } from "./api/service2/service2";

import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

import { OpenApiMeta } from "trpc-openapi";

export const service2Client = createTRPCProxyClient<Service2>({
  links: [httpBatchLink({ url: "http://localhost:3001/trpc/service2" })],
});

// NOTE: initializing tRPC in this manner prevents the error "Uncaught Error: You're trying to use @trpc/server in a non-server environment. This is not supported by default.
const trpcServer = () => {
  if (!isWeb) {
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

    return {
      service1Middleware,
      service1Router,
      service1UserProcedure,
      service2Middleware,
      service2Router,
      service2UserProcedure,
    };
  }
};

const { ...trpc } = trpcServer() || ({} as ReturnType<typeof trpcServer>);

// NOTE: must be destructured, otherwise it loses the type-safety due to the aboslute paths
const {
  service1Middleware,
  service1Router,
  service1UserProcedure,
  service2Middleware,
  service2Router,
  service2UserProcedure,
} = trpc;

export {
  service1Middleware,
  service1Router,
  service1UserProcedure,
  service2Middleware,
  service2Router,
  service2UserProcedure,
};
