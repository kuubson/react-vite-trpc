import { QueryClient } from "@tanstack/react-query";
import { httpLink } from "@trpc/client/links/httpLink";
import { useState } from "react";

import { trpc } from "trpc";

export const useTrpc = () => {
  const [trpcQueryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  // NOTE: let's assume that service1 is the only main service consumed by the client | can be adjusted if it has to consume service2 etc.
  const [service1] = useState(() =>
    trpc.createClient({ links: [httpLink({ url: "/trpc/service1" })] })
  );

  return {
    trpcQueryClient,
    service1,
  };
};
