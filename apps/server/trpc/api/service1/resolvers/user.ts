import { service1UserProcedure, service2Client } from "trpc/trpc";

export const user = service1UserProcedure.query(async () => {
  const role = await service2Client.role.query();
  return { user: { name: "John" }, ...role };
});
