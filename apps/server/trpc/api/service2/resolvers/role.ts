import { service2UserProcedure } from "trpc/trpc";

export const role = service2UserProcedure.query(() => ({ role: "USER" }));
