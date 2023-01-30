import { initTRPC } from "@trpc/server";

const isWeb = typeof document !== "undefined";

import type { Service1Context } from "./api/service1/service1";
import { Service2, Service2Context } from "./api/service2/service2";

import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

export const service2Client = createTRPCProxyClient<Service2>({
  links: [httpBatchLink({ url: "http://localhost:3001/service2" })],
});

// -------------------------- SERVICE 1 INIT --------------------------

// NOTE: initializing tRPC in this manner prevents the error "Uncaught Error: You're trying to use @trpc/server in a non-server environment. This is not supported by default.
const initService1 = () => {
  if (!isWeb) {
    const t = initTRPC.context<Service1Context>().create();

    const { middleware, router } = t;

    const service1UserProcedure = t.procedure;

    return {
      service1Middleware: middleware,
      service1Router: router,
      service1UserProcedure,
    };
  }
};

const { ...service1 } =
  initService1() || ({} as ReturnType<typeof initService1>);

const { service1Middleware, service1Router, service1UserProcedure } = service1;

// -------------------------- SERVICE 2 INIT --------------------------

const initService2 = () => {
  if (!isWeb) {
    const t = initTRPC.context<Service2Context>().create();

    const { middleware, router } = t;

    const service2UserProcedure = t.procedure;

    return {
      service2Middleware: middleware,
      service2Router: router,
      service2UserProcedure,
    };
  }
};

const { ...service2 } =
  initService2() || ({} as ReturnType<typeof initService2>);

const { service2Middleware, service2Router, service2UserProcedure } = service2;

export { service1Middleware, service1Router, service1UserProcedure };
export { service2Middleware, service2Router, service2UserProcedure };
