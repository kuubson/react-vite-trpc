import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

import { trpc } from "@trpc";

import { useTrpc } from "hooks";

import "styles/index.scss";

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
