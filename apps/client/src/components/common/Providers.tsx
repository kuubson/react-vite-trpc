import { QueryClientProvider } from "@tanstack/react-query";

import { trpc } from "api";

import "styles/index.scss";

import { useTrpc } from "hooks";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  const { trpcQueryClient, trpcClient } = useTrpc();
  return (
    <trpc.Provider client={trpcClient} queryClient={trpcQueryClient}>
      <QueryClientProvider client={trpcQueryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
};
