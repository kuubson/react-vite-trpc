import { userProcedure } from "trpc/trpc";

export const user = userProcedure.query(() => ({ role: "USER" as const }));
