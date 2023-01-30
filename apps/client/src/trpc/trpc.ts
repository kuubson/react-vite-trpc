import { createTRPCReact } from "@trpc/react-query";

// NOTE: If the type loses type safety, you can restore it by saving the file 1-2 times using the CTRL + S
import type { Service1 } from "@example/server/trpc/api/service1/service1";

export const trpc = createTRPCReact<Service1>();

// TODO: to investigate: it this re-exports is deleted, the AppRouter loses typesafety
export * from "@example/server/trpc";
