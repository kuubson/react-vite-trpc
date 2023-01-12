import { useTrpc } from "hooks";
import styled from "styled-components";

import { Providers } from "./common";
import { Home } from "./user";

export const App = () => {
  const { trpcQueryClient, trpcClient } = useTrpc();
  return (
    <Providers>
      <Home />
    </Providers>
  );
};

const AppContainer = styled.div``;
