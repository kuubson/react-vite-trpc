import { initTRPC } from "@trpc/server";

import type { Context } from "./api/router";

const t = initTRPC.context<Context>().create();

const { middleware, router } = t;

const userProcedure = t.procedure;

export { middleware, router, userProcedure };
