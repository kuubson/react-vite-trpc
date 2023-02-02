import { service1UserProcedure, service2Client } from "trpc/trpc";
import { z } from "zod";

export const user = service1UserProcedure
  .meta({ openapi: { method: "GET", path: "/user" } })
  .input(z.void())
  .output(z.object({ user: z.object({ name: z.string() }), role: z.string() }))
  .query(async () => {
    const role = await service2Client.role.query();
    return { user: { name: "John" }, ...role };
  });
