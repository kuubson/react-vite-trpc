import styled from "styled-components";

import { Providers } from "./common";
import { Home } from "./user";

export const App = () => (
  <Providers>
    <Home />
  </Providers>
);

const AppContainer = styled.div``;
