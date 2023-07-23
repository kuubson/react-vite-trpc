import { userProcedure } from "trpc";

export const user = userProcedure.query(() => ({ role: "USER" as const }));
