import { initTRPC } from "@trpc/server";

const isWeb = typeof document !== "undefined";

import type { Context } from "./api/router";

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
