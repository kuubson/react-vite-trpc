import { createTRPCReact } from "@trpc/react-query";

import type { Service1 } from "../../../server/trpc/api/service1/service1";

export const trpc = createTRPCReact<Service1>();
