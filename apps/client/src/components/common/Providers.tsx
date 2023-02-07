import { QueryClientProvider } from "@tanstack/react-query";

import { trpc } from "api";

import "styles/index.scss";

import { useTrpc } from "hooks";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  const { trpcQueryClient, service1 } = useTrpc();
  return (
    <trpc.Provider client={service1} queryClient={trpcQueryClient}>
      <QueryClientProvider client={trpcQueryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
};
