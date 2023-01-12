import { createTRPCReact } from "@trpc/react-query";

// NOTE: If the type loses type safety, you can restore it by saving the file 1-2 times using the CTRL + S
import type { AppRouter } from "@example/server/trpc/api/router";

export const trpc = createTRPCReact<AppRouter>();

// TODO: to investigate: it this re-exports is deleted, the AppRouter loses typesafety
export * from "@example/server/trpc";
