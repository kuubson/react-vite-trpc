import { service2UserProcedure } from "trpc/trpc";
import { z } from "zod";

export const role = service2UserProcedure
  .meta({ openapi: { method: "GET", path: "/role" } })
  .input(z.void())
  .output(z.object({ role: z.enum(["USER"]) }))
  .query(() => ({ role: "USER" }));
