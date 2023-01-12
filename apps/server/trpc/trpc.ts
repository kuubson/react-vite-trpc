import { initTRPC } from "@trpc/server";

const isWeb = typeof document !== "undefined";

import type { Context } from "./api/router";

// NOTE: initializing tRPC in this manner prevents the error "Uncaught Error: You're trying to use @trpc/server in a non-server environment. This is not supported by default.

const trpcServer = () => {
  if (!isWeb) {
    const t = initTRPC.context<Context>().create();

    const { middleware, router } = t;

    const userProcedure = t.procedure;

    return {
      middleware,
      router,
      userProcedure,
    };
  }
};

const { ...trpc } = trpcServer() || ({} as ReturnType<typeof trpcServer>);

const { middleware, router, userProcedure } = trpc;

export { middleware, router, userProcedure };
